# Codex

OpenAI Codex CLI

## AGENTS.md

配置文件位置：`~/.codex/AGENTS.md`

```markdown
- Always respond in Chinese-simplified
```

## MCP Servers

配置文件位置：`~/.codex/config.toml`

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]

[mcp_servers.shadcn]
command = "npx"
args = ["shadcn@latest", "mcp"]
```
