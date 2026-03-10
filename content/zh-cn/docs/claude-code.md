# claude-code

Claude Code

## Settings

配置文件位置：

- macOS / Linux: `~/.claude/settings.json`
- Windows: `$HOME\.claude\settings.json`

```json
{
  "attribution": {
    "commit": "",
    "pr": ""
  },
  "language": "chinese",
  "skipDangerousModePermissionPrompt": true
}
```

## MCP Servers

配置文件位置：`~/.claude.json`

```json
{
  "mcpServers": {
    "codex": {
      "command": "codex",
      "args": ["mcp-server"]
    },
    "context7": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    },
    "shadcn": {
      "type": "stdio",
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}
```

## Command

```sh
# 继续上一次对话
claude -c

# 跳过权限确认
claude --dangerously-skip-permissions
```

### Shell 函数 {#shell-function}

优先尝试继续上次对话，失败则新建对话：

**Zsh**

```zsh
claude() {
  local base_args="--allow-dangerously-skip-permissions --permission-mode plan"

  command claude ${=base_args} -c "$@" 2>/dev/null || command claude ${=base_args} "$@"
}
```

**PowerShell**

```powershell
function claude {
    $baseArgs = @("--allow-dangerously-skip-permissions", "--permission-mode", "plan")
    $claudePath = (Get-Command claude -CommandType Application).Source

    & $claudePath @baseArgs -c @args 2>$null

    if ($LASTEXITCODE -ne 0) {
        & $claudePath @baseArgs @args
    }
}
```
