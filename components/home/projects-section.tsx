'use client'

import { useEffect, useState } from 'react'
import type { GitHubRepo } from '@/types/github'
import { ProjectCard } from './project-card'
import { ProjectCardSkeleton } from './project-card-skeleton'

export function ProjectsSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/github/repos')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data)
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 animate-fade-in-up text-center text-2xl font-semibold">
          我的项目
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))
            : repos.map((repo, index) => (
                <ProjectCard key={repo.id} repo={repo} index={index} />
              ))}
        </div>
      </div>
    </section>
  )
}
