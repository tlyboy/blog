# Codex

OpenAI Codex CLI

## MCP Servers

Config file location: `~/.codex/config.toml`

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]

[mcp_servers.shadcn]
command = "npx"
args = ["shadcn@latest", "mcp"]
```
