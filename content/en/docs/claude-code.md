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
  "enabledPlugins": {
    "commit-commands@claude-plugins-official": true,
    "code-simplifier@claude-plugins-official": true,
    "ralph-loop@claude-plugins-official": true,
    "document-skills@anthropic-agent-skills": true
  },
  "language": "chinese"
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
