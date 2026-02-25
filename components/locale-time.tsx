'use client'

interface LocaleTimeProps {
  date: string
  locale: string
}

export function LocaleTime({ date, locale }: LocaleTimeProps) {
  return (
    <time dateTime={date} suppressHydrationWarning>
      {new Date(date).toLocaleString(new Intl.Locale(locale).toString(), {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })}
    </time>
  )
}
