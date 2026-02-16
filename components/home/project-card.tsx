import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import type { GitHubRepo } from '@/types/github'
import { Star, GitFork, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  repo: GitHubRepo
  index: number
}

export function ProjectCard({ repo, index }: ProjectCardProps) {
  const t = useTranslations('projects')

  return (
    <Link
      href={`/projects/${repo.name}`}
      className="group animate-fade-in-up border-border bg-card hover:border-primary relative flex flex-col gap-3 rounded-xl border p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
      style={{ animationDelay: `${100 + index * 50}ms` }}
    >
      {/* Card Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="group-hover:text-primary flex-1 truncate font-semibold transition-colors">
          {repo.name}
        </h3>
        <div className="flex shrink-0 items-center gap-3">
          {repo.stargazers_count > 0 && (
            <span className="text-muted-foreground flex items-center gap-1 text-sm">
              <Star className="size-3.5" />
              {repo.stargazers_count}
            </span>
          )}
          {repo.forks_count > 0 && (
            <span className="text-muted-foreground flex items-center gap-1 text-sm">
              <GitFork className="size-3.5" />
              {repo.forks_count}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground line-clamp-2 text-sm">
        {repo.description || t('noDescription')}
      </p>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between pt-2">
        {repo.language ? (
          <span className="bg-primary/90 text-primary-foreground inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium">
            {repo.language}
          </span>
        ) : (
          <div />
        )}
        {repo.homepage && (
          <span
            onClick={(e) => {
              e.preventDefault()
              window.open(repo.homepage!, '_blank', 'noopener,noreferrer')
            }}
            className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-lg p-2 transition-colors"
            title={t('visitWebsite')}
          >
            <ExternalLink className="size-4" />
          </span>
        )}
      </div>
    </Link>
  )
}
