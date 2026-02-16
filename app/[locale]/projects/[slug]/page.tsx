import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { getRepos, getRepo, getRepoReadme } from '@/lib/github'
import { StreamdownRenderer } from '@/components/markdown/streamdown-renderer'
import { CopyCloneButton } from '@/components/copy-clone-button'
import { CopyMarkdownButton } from '@/components/copy-markdown-button'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'

interface ProjectPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const repos = await getRepos()
  return repos.map((repo) => ({
    slug: repo.name,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: 'projects' })
  const repo = await getRepo(slug)

  if (!repo) {
    return { title: t('notFound') }
  }

  return {
    title: repo.name,
    description: repo.description || t('projectDetails', { name: repo.name }),
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const t = await getTranslations('projects')
  const repo = await getRepo(slug)

  if (!repo) {
    notFound()
  }

  const readme = await getRepoReadme(
    repo.full_name,
    repo.default_branch,
    locale,
  )

  return (
    <div className="mx-auto max-w-4xl px-4 py-24">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          {t('backToList')}
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <CopyCloneButton fullName={repo.full_name} />
          {readme && <CopyMarkdownButton content={readme} />}
          <Button variant="outline" size="sm" asChild>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 size-4" />
              GitHub
            </a>
          </Button>
          {repo.homepage && (
            <Button variant="outline" size="sm" asChild>
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 size-4" />
                {t('visit')}
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
          <p className="text-muted-foreground">{t('noReadme')}</p>
        )}
      </article>
    </div>
  )
}
