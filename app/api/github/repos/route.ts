import { NextResponse } from 'next/server'
import { getRepos } from '@/lib/github'

export async function GET() {
  const repos = await getRepos()

  if (repos.length === 0) {
    return NextResponse.json(
      { error: 'Failed to fetch GitHub repos' },
      { status: 500 },
    )
  }

  // 只返回前 6 个项目
  return NextResponse.json(repos.slice(0, 6))
}
