import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { getRepos, getRepo, getRepoReadme } from '@/lib/github'
import { StreamdownRenderer } from '@/components/markdown/streamdown-renderer'
import { CopyMarkdownButton } from '@/components/copy-markdown-button'
import { Button } from '@/components/ui/button'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const repos = await getRepos()
  return repos.map((repo) => ({
    slug: repo.name,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const repo = await getRepo(slug)

  if (!repo) {
    return { title: '项目未找到' }
  }

  return {
    title: repo.name,
    description: repo.description || `${repo.name} 项目详情`,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const repo = await getRepo(slug)

  if (!repo) {
    notFound()
  }

  const readme = await getRepoReadme(repo.full_name, repo.default_branch)

  return (
    <div className="mx-auto max-w-4xl px-4 py-24">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          返回项目列表
        </Link>

        <div className="flex items-center gap-2">
          {readme && <CopyMarkdownButton content={readme} />}
          <Button variant="outline" size="sm" asChild>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-1.5 size-4" />
              GitHub
            </a>
          </Button>
          {repo.homepage && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-1.5 size-4" />
                访问
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* README */}
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        {readme ? (
          <StreamdownRenderer content={readme} />
        ) : (
          <p className="text-muted-foreground">该项目暂无 README</p>
        )}
      </article>
    </div>
  )
}
