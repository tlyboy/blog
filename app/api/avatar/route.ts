import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'
import { getUser } from '@/lib/github'

export async function GET(request: NextRequest) {
  const size = Number(request.nextUrl.searchParams.get('s')) || 32

  const user = await getUser()
  if (!user?.avatar_url) {
    return new NextResponse(null, { status: 404 })
  }

  const res = await fetch(user.avatar_url)
  if (!res.ok) {
    return new NextResponse(null, { status: 502 })
  }

  const buffer = Buffer.from(await res.arrayBuffer())

  const r = size / 2
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}">
      <circle cx="${r}" cy="${r}" r="${r}" fill="white"/>
    </svg>`,
  )

  const png = await sharp(buffer)
    .resize(size, size)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer()

  return new NextResponse(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
