import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'zh-cn'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: true,
})
