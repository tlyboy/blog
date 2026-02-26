'use client'

import { useEffect, useState } from 'react'

const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}

interface LocaleTimeProps {
  date: string
  locale: string
}

export function LocaleTime({ date, locale }: LocaleTimeProps) {
  const loc = new Intl.Locale(locale).toString()
  const [formatted, setFormatted] = useState(() =>
    new Date(date).toLocaleString(loc, { ...options, timeZone: 'UTC' }),
  )

  useEffect(() => {
    setFormatted(new Date(date).toLocaleString(loc, options))
  }, [date, loc])

  return (
    <time dateTime={date} suppressHydrationWarning>
      {formatted}
    </time>
  )
}
