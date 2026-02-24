import { S3Client } from '@aws-sdk/client-s3'

let s3Client: S3Client | null = null

export function getS3Client(): S3Client {
  if (!s3Client) {
    s3Client = new S3Client({
      region: process.env.S3_REGION || 'auto',
      endpoint: process.env.S3_ENDPOINT,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID!,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
      },
    })
  }
  return s3Client
}

export function getPublicUrl(path: string): string {
  const domain = process.env.S3_PUBLIC_DOMAIN
  return `https://${domain}/${path}`
}
