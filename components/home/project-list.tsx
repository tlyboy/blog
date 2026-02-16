'use client'

import { useState, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Star, GitFork, Search, ExternalLink } from 'lucide-react'
import { Input } from '@/components/ui/input'
import type { GitHubRepo } from '@/types/github'

interface ProjectListProps {
  repos: GitHubRepo[]
}

export function ProjectList({ repos }: ProjectListProps) {
  const [search, setSearch] = useState('')
  const t = useTranslations('projects')

  const filteredRepos = useMemo(() => {
    if (!search.trim()) return repos

    const query = search.toLowerCase()
    return repos.filter(
      (repo) =>
        repo.name.toLowerCase().includes(query) ||
        repo.description?.toLowerCase().includes(query) ||
        repo.language?.toLowerCase().includes(query),
    )
  }, [repos, search])

  return (
    <>
      <div className="sticky top-20 z-40 mb-6">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-background dark:bg-background pl-10 shadow-sm"
          />
        </div>
      </div>

      {filteredRepos.length === 0 ? (
        <p className="text-muted-foreground text-center">
          {search ? t('noMatch') : t('noProjects')}
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredRepos.map((repo) => (
            <Link
              key={repo.id}
              href={`/projects/${repo.name}`}
              className="group border-border bg-card hover:border-primary flex flex-col gap-3 rounded-xl border p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="group-hover:text-primary flex-1 truncate font-semibold transition-colors">
                  {repo.name}
                </h2>
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

              <p className="text-muted-foreground line-clamp-2 flex-1 text-sm">
                {repo.description || t('noDescription')}
              </p>

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
                      window.open(
                        repo.homepage!,
                        '_blank',
                        'noopener,noreferrer',
                      )
                    }}
                    className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-lg p-2 transition-colors"
                    title={t('visitWebsite')}
                  >
                    <ExternalLink className="size-4" />
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
