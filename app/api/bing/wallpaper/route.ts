import { NextResponse } from 'next/server'
import type { BingWallpaperResponse } from '@/types/bing'

export async function GET() {
  const res = await fetch(
    'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN',
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
