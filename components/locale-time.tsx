'use client'

import { useEffect, useState } from 'react'

interface LocaleTimeProps {
  date: string
  locale: string
}

export function LocaleTime({ date, locale }: LocaleTimeProps) {
  const [formatted, setFormatted] = useState('')

  useEffect(() => {
    setFormatted(
      new Date(date).toLocaleString(new Intl.Locale(locale).toString(), {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    )
  }, [date, locale])

  return <time dateTime={date}>{formatted}</time>
}
