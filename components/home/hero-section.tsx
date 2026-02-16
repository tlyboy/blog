import Image from 'next/image'
import { useTranslations } from 'next-intl'
import type { GitHubUser } from '@/types/github'
import { MapPin, BookMarked, Users } from 'lucide-react'

interface HeroSectionProps {
  user: GitHubUser | null
  backgroundUrl?: string
}

export function HeroSection({ user, backgroundUrl }: HeroSectionProps) {
  const t = useTranslations('home')

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
      <div className="via-background/30 to-background/95 absolute inset-0 bg-linear-to-b from-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-125 items-center justify-center px-5 py-20">
        <div className="animate-fade-in-up flex flex-col items-center text-center">
          {/* Avatar */}
          {user?.avatar_url && (
            <div className="mb-6">
              <Image
                src={user.avatar_url}
                alt={user.name || 'Avatar'}
                width={128}
                height={128}
                className="size-32 rounded-full shadow-xl ring-4 ring-white/80 dark:ring-white/20"
              />
            </div>
          )}

          {/* Name */}
          <h1 className="mb-3 text-4xl font-bold md:text-5xl">
            {user?.name || 'Guany'}
          </h1>

          {/* Bio */}
          {user?.bio && (
            <p className="text-muted-foreground mb-6 max-w-md text-lg">
              {user.bio}
            </p>
          )}

          {/* Stats */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
            {user?.location && (
              <div className="text-muted-foreground flex items-center gap-1 text-sm">
                <MapPin className="size-4" />
                <span>{user.location}</span>
              </div>
            )}
            {user?.public_repos !== undefined && (
              <div className="text-muted-foreground flex items-center gap-1 text-sm">
                <BookMarked className="size-4" />
                <span>{t('repos', { count: user.public_repos })}</span>
              </div>
            )}
            {user?.followers !== undefined && (
              <div className="text-muted-foreground flex items-center gap-1 text-sm">
                <Users className="size-4" />
                <span>{t('followers', { count: user.followers })}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
