export interface HeroConfig {
  mode: 'bing' | 'custom'
  custom?: {
    url: string
    position?: string
  }
}

export interface BlogConfig {
  hero?: HeroConfig
}

export interface HeroBackground {
  url: string
  position: string
}
