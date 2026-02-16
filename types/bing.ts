export interface BingWallpaperResponse {
  images: BingImage[]
}

export interface BingImage {
  url: string
  urlbase: string
  copyright: string
  title: string
}
