export function getPublicUrl(path: string): string {
  const domain = process.env.S3_PUBLIC_DOMAIN
  return `https://${domain}/${path}`
}
