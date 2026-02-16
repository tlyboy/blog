import { buildLlmsContent } from '@/lib/llms-content'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params
  const content = await buildLlmsContent({ includeFullContent: true, locale })
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
