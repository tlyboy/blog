import { NextResponse } from 'next/server'

const TO_API_URL = process.env.TO_API_URL
const TO_API_KEY = process.env.TO_API_KEY

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return ['http:', 'https:'].includes(parsed.protocol)
  } catch {
    return false
  }
}

async function shorten(url: string): Promise<string | null> {
  if (!TO_API_URL || !TO_API_KEY) return null

  const res = await fetch(`${TO_API_URL}/api/v1/shorten`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TO_API_KEY}`,
    },
    body: JSON.stringify({ url }),
  })

  if (!res.ok) return null
  const { data } = await res.json()
  return data.shortUrl as string
}

// GET /api/to?url=xxx → 创建短链 → 302 到短链（经 to 跳转并记录点击）
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')

  if (!url || !isValidUrl(url)) {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 })
  }

  try {
    const shortUrl = await shorten(url)
    if (shortUrl) {
      return NextResponse.redirect(shortUrl, 302)
    }
  } catch {
    // fallback to original URL
  }

  return NextResponse.redirect(url, 302)
}
