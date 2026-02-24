export interface HeroConfig {
  mode: 'bing' | 'custom'
  custom?: {
    url: string
  }
}

export interface BlogConfig {
  hero?: HeroConfig
}
