import { NextResponse } from 'next/server'
import type { GitHubUser } from '@/types/github'

export async function GET() {
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    return NextResponse.json(
      { error: 'GITHUB_TOKEN is not configured' },
      { status: 500 },
    )
  }

  const res = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: 3600 }, // 缓存 1 小时
  })

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch GitHub user' },
      { status: res.status },
    )
  }

  const data = await res.json()

  const user: GitHubUser = {
    login: data.login,
    id: data.id,
    avatar_url: data.avatar_url,
    html_url: data.html_url,
    name: data.name,
    bio: data.bio,
    location: data.location,
    public_repos: data.public_repos,
    followers: data.followers,
    following: data.following,
  }

  return NextResponse.json(user)
}
