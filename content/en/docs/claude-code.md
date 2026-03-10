# claude-code

Claude Code

## Settings

Config file location:

- macOS / Linux: `~/.claude/settings.json`
- Windows: `$HOME\.claude\settings.json`

```json
{
  "attribution": {
    "commit": "",
    "pr": ""
  },
  "skipDangerousModePermissionPrompt": true
}
```

## MCP Servers

Config file location: `~/.claude.json`

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
# Continue the last conversation
claude -c

# Skip permission confirmation
claude --dangerously-skip-permissions
```

### Shell Function

Try to continue the last conversation first; if it fails, start a new one:

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
