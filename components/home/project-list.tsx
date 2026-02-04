'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Star, GitFork, Search, ExternalLink } from 'lucide-react'
import { Input } from '@/components/ui/input'
import type { GitHubRepo } from '@/types/github'

interface ProjectListProps {
  repos: GitHubRepo[]
}

export function ProjectList({ repos }: ProjectListProps) {
  const [search, setSearch] = useState('')

  const filteredRepos = useMemo(() => {
    if (!search.trim()) return repos

    const query = search.toLowerCase()
    return repos.filter(
      (repo) =>
        repo.name.toLowerCase().includes(query) ||
        repo.description?.toLowerCase().includes(query) ||
        repo.language?.toLowerCase().includes(query)
    )
  }, [repos, search])

  return (
    <>
      <div className="sticky top-20 z-40 mb-6 bg-background/95 backdrop-blur-sm py-2 -mx-4 px-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="搜索项目名称、描述或语言..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {filteredRepos.length === 0 ? (
        <p className="text-center text-muted-foreground">
          {search ? '没有找到匹配的项目' : '暂无项目'}
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredRepos.map((repo) => (
            <Link
              key={repo.id}
              href={`/projects/${repo.name}`}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="flex-1 truncate font-semibold transition-colors group-hover:text-primary">
                  {repo.name}
                </h2>
                <div className="flex shrink-0 items-center gap-3">
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="size-3.5" />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <GitFork className="size-3.5" />
                      {repo.forks_count}
                    </span>
                  )}
                </div>
              </div>

              <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">
                {repo.description || '暂无描述'}
              </p>

              <div className="mt-auto flex items-center justify-between pt-2">
                {repo.language ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-medium text-primary-foreground">
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
                    className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    title="访问网站"
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
