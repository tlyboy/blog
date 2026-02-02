export interface DocGroup {
  title: string
  items: { title: string; slug: string }[]
}

export const docsConfig: DocGroup[] = [
  {
    title: '指南',
    items: [{ title: '简介', slug: 'getting-started' }],
  },
  {
    title: '环境',
    items: [
      { title: 'macOS', slug: 'macos' },
      { title: 'Linux', slug: 'linux' },
      { title: 'Ubuntu', slug: 'ubuntu' },
      { title: 'Windows', slug: 'windows' },
      { title: 'WSL', slug: 'wsl' },
      { title: 'Zsh', slug: 'zsh' },
      { title: 'PowerShell', slug: 'powershell' },
      { title: 'Warp', slug: 'warp' },
      { title: 'Windows Terminal', slug: 'windows-terminal' },
      { title: 'VS Code', slug: 'vscode' },
      { title: 'Git', slug: 'git' },
      { title: 'SSH', slug: 'ssh' },
      { title: 'Docker', slug: 'docker' },
      { title: 'fnm', slug: 'fnm' },
      { title: 'ni', slug: 'ni' },
      { title: 'Claude Code', slug: 'claude-code' },
      { title: 'fastfetch', slug: 'fastfetch' },
      { title: 'Raycast', slug: 'raycast' },
      { title: 'ZeroTier', slug: 'zerotier' },
    ],
  },
]
