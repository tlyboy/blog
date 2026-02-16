# ollama

Ollama CORS & LAN Access

## Environment Variables

| Variable         | Purpose              | Default                |
| ---------------- | -------------------- | ---------------------- |
| `OLLAMA_HOST`    | Bind address         | `127.0.0.1:11434`      |
| `OLLAMA_ORIGINS` | Allowed CORS origins | `127.0.0.1`, `0.0.0.0` |

Set `OLLAMA_HOST=0.0.0.0:11434` to allow LAN access, and `OLLAMA_ORIGINS=*` to allow all cross-origin requests.

## macOS

Ollama runs as a GUI app managed by `launchd`. Environment variables in `~/.zshrc` do **not** affect it.

### Set Environment Variables

```sh
launchctl setenv OLLAMA_HOST "0.0.0.0:11434"
launchctl setenv OLLAMA_ORIGINS "*"
```

Then quit and relaunch Ollama from the menu bar.

> Note: `launchctl setenv` does not persist across reboots. To persist, run `ollama serve` manually or create a LaunchAgent plist.

### Verify

```sh
curl http://localhost:11434/api/version
```

## Windows

### Set Environment Variables

```powershell
[System.Environment]::SetEnvironmentVariable("OLLAMA_HOST", "0.0.0.0:11434", "User")
[System.Environment]::SetEnvironmentVariable("OLLAMA_ORIGINS", "*", "User")
```

Then quit and relaunch Ollama from the Start menu.

### Firewall

```powershell
New-NetFirewallRule -DisplayName "Ollama API" -Direction Inbound -Protocol TCP -LocalPort 11434 -Action Allow
```

### Verify

```powershell
curl http://127.0.0.1:11434/api/version
```

## Linux

Ollama runs as a systemd service. Use `systemctl edit` to configure environment variables.

### Set Environment Variables

```sh
sudo systemctl edit ollama.service
```

Add the following content:

```ini
[Service]
Environment="OLLAMA_HOST=0.0.0.0:11434"
Environment="OLLAMA_ORIGINS=*"
```

Then reload and restart:

```sh
sudo systemctl daemon-reload
sudo systemctl restart ollama
```

### Firewall

```sh
# UFW
sudo ufw allow 11434/tcp

# firewalld
sudo firewall-cmd --permanent --add-port=11434/tcp
sudo firewall-cmd --reload
```

### Verify

```sh
curl http://localhost:11434/api/version
```

## OLLAMA_ORIGINS

| Value                                     | Description           |
| ----------------------------------------- | --------------------- |
| `*`                                       | Allow all origins     |
| `http://localhost:3000`                   | Allow specific origin |
| `http://localhost:3000,https://myapp.com` | Multiple origins      |
