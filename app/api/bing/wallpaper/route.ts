import { type NextRequest, NextResponse } from 'next/server'
import type { BingWallpaperResponse } from '@/types/bing'

function toMkt(locale: string): string {
  const { language, region } = new Intl.Locale(locale).maximize()
  return `${language}-${region}`
}

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get('locale') || 'en'
  const mkt = toMkt(locale)

  const res = await fetch(
    `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=${mkt}`,
    {
      next: { revalidate: 3600 }, // 缓存 1 小时
    },
  )

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch Bing wallpaper' },
      { status: res.status },
    )
  }

  const data: BingWallpaperResponse = await res.json()
  const wallpaperUrl = `https://www.bing.com${data.images[0].url}`

  return NextResponse.json({
    url: wallpaperUrl,
    copyright: data.images[0].copyright,
    title: data.images[0].title,
  })
}
