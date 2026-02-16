'use client'

import { useState, useCallback } from 'react'

export function useCopy(
  timeout = 2000,
): [boolean, (text: string) => Promise<void>] {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(
    async (text: string) => {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), timeout)
    },
    [timeout],
  )

  return [copied, copy]
}
