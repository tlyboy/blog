import { getRepos } from '@/lib/github'
import { ProjectList } from '@/components/home/project-list'

export const metadata = {
  title: '项目',
  description: '我的开源项目列表',
}

export default async function ProjectsPage() {
  const repos = await getRepos()

  return (
    <div className="mx-auto max-w-4xl px-4 py-24">
      <h1 className="mb-8 text-3xl font-bold">项目</h1>
      <ProjectList repos={repos} />
    </div>
  )
}
