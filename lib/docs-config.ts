export interface DocItem {
  titleKey: string
  slug: string
}

export interface DocGroup {
  titleKey: string
  items: DocItem[]
}

export const docsConfig: DocGroup[] = [
  {
    titleKey: 'guide',
    items: [{ titleKey: 'introduction', slug: 'getting-started' }],
  },
  {
    titleKey: 'environment',
    items: [
      { titleKey: 'macOS', slug: 'macos' },
      { titleKey: 'Linux', slug: 'linux' },
      { titleKey: 'Ubuntu', slug: 'ubuntu' },
      { titleKey: 'Windows', slug: 'windows' },
      { titleKey: 'WSL', slug: 'wsl' },
      { titleKey: 'Zsh', slug: 'zsh' },
      { titleKey: 'PowerShell', slug: 'powershell' },
      { titleKey: 'Warp', slug: 'warp' },
      { titleKey: 'Windows Terminal', slug: 'windows-terminal' },
      { titleKey: 'VS Code', slug: 'vscode' },
      { titleKey: 'Git', slug: 'git' },
      { titleKey: 'SSH', slug: 'ssh' },
      { titleKey: 'Docker', slug: 'docker' },
      { titleKey: 'fnm', slug: 'fnm' },
      { titleKey: 'ni', slug: 'ni' },
      { titleKey: 'Claude Code', slug: 'claude-code' },
      { titleKey: 'fastfetch', slug: 'fastfetch' },
      { titleKey: 'Raycast', slug: 'raycast' },
      { titleKey: 'ZeroTier', slug: 'zerotier' },
      { titleKey: 'Ollama', slug: 'ollama' },
    ],
  },
]

export function getDocNavigation(slug: string) {
  const flatItems = docsConfig.flatMap((group) => group.items)
  const index = flatItems.findIndex((item) => item.slug === slug)

  if (index === -1) return { prev: null, next: null }

  return {
    prev: index > 0 ? flatItems[index - 1] : null,
    next: index < flatItems.length - 1 ? flatItems[index + 1] : null,
  }
}
