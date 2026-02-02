import { buildLlmsContent } from '@/lib/llms-content'

export async function GET() {
  const content = await buildLlmsContent({ includeFullContent: true })
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
