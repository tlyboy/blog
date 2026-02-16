import { setRequestLocale, getTranslations } from 'next-intl/server'
import { getRepos } from '@/lib/github'
import { ProjectList } from '@/components/home/project-list'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'projects' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const repos = await getRepos()

  return (
    <div className="mx-auto max-w-4xl px-4 py-24">
      <h1 className="mb-8 text-3xl font-bold">
        <ProjectsTitle />
      </h1>
      <ProjectList repos={repos} />
    </div>
  )
}

async function ProjectsTitle() {
  const t = await getTranslations('projects')
  return <>{t('title')}</>
}
