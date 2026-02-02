export interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string
  bio: string | null
  location: string | null
  public_repos: number
  followers: number
  following: number
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  default_branch: string
}
