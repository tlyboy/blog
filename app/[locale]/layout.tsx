import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { notFound } from 'next/navigation'
import {
  setRequestLocale,
  getTranslations,
  getMessages,
} from 'next-intl/server'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/layout/site-header'
import { routing } from '@/i18n/routing'
import { getUser } from '@/lib/github'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-mono' })

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  const user = await getUser()
  const name = user?.name || 'Guany'

  return {
    title: {
      default: t('blogTitle', { name }),
      template: `%s | ${t('blogTitle', { name })}`,
    },
    description: user?.bio || t('blogDescription', { name }),
    icons: user?.avatar_url ? [{ url: '/api/avatar' }] : undefined,
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  const [user, messages] = await Promise.all([getUser(), getMessages()])

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}
    >
      <head />
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-full flex-col">
              <SiteHeader
                avatar={user?.avatar_url}
                name={user?.name || undefined}
              />
              <main className="flex-1">{children}</main>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
