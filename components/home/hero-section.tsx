import type { GitHubUser } from '@/types/github'
import { MapPin, BookMarked, Users } from 'lucide-react'

interface HeroSectionProps {
  user: GitHubUser | null
  backgroundUrl?: string
}

export function HeroSection({ user, backgroundUrl }: HeroSectionProps) {
  return (
    <section className="relative pt-16">
      {/* Background Image */}
      {backgroundUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/95" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[500px] items-center justify-center px-5 py-20">
        <div className="flex animate-fade-in-up flex-col items-center text-center">
          {/* Avatar */}
          {user?.avatar_url && (
            <div className="mb-6">
              <img
                src={user.avatar_url}
                alt={user.name || 'Avatar'}
                className="size-32 rounded-full shadow-xl ring-4 ring-white/80 dark:ring-white/20"
              />
            </div>
          )}

          {/* Name */}
          <h1 className="mb-3 text-4xl font-bold md:text-5xl">
            {user?.name || 'Loading...'}
          </h1>

          {/* Bio */}
          {user?.bio && (
            <p className="mb-6 max-w-md text-lg text-muted-foreground">
              {user.bio}
            </p>
          )}

          {/* Stats */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
            {user?.location && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="size-4" />
                <span>{user.location}</span>
              </div>
            )}
            {user?.public_repos !== undefined && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <BookMarked className="size-4" />
                <span>{user.public_repos} 仓库</span>
              </div>
            )}
            {user?.followers !== undefined && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="size-4" />
                <span>{user.followers} 粉丝</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
