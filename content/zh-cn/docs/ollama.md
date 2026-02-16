# ollama

Ollama CORS & LAN Access

## 环境变量 {#environment-variables}

| 变量             | 用途             | 默认值                 |
| ---------------- | ---------------- | ---------------------- |
| `OLLAMA_HOST`    | 绑定地址         | `127.0.0.1:11434`      |
| `OLLAMA_ORIGINS` | 允许的 CORS 来源 | `127.0.0.1`, `0.0.0.0` |

设置 `OLLAMA_HOST=0.0.0.0:11434` 允许局域网访问，设置 `OLLAMA_ORIGINS=*` 允许所有跨域请求。

## macOS

Ollama 作为 GUI 应用运行，由 `launchd` 管理。`~/.zshrc` 中的环境变量**不会**对其生效。

### 设置环境变量 {#macos-set-environment-variables}

```sh
launchctl setenv OLLAMA_HOST "0.0.0.0:11434"
launchctl setenv OLLAMA_ORIGINS "*"
```

然后从菜单栏退出并重新启动 Ollama。

> 注意：`launchctl setenv` 重启后不会保留。如需持久化，可手动运行 `ollama serve` 或创建 LaunchAgent plist。

### 验证 {#macos-verify}

```sh
curl http://localhost:11434/api/version
```

## Windows

### 设置环境变量 {#windows-set-environment-variables}

```powershell
[System.Environment]::SetEnvironmentVariable("OLLAMA_HOST", "0.0.0.0:11434", "User")
[System.Environment]::SetEnvironmentVariable("OLLAMA_ORIGINS", "*", "User")
```

然后从开始菜单退出并重新启动 Ollama。

### 防火墙 {#windows-firewall}

```powershell
New-NetFirewallRule -DisplayName "Ollama API" -Direction Inbound -Protocol TCP -LocalPort 11434 -Action Allow
```

### 验证 {#windows-verify}

```powershell
curl http://127.0.0.1:11434/api/version
```

## Linux

Ollama 作为 systemd 服务运行。使用 `systemctl edit` 配置环境变量。

### 设置环境变量 {#linux-set-environment-variables}

```sh
sudo systemctl edit ollama.service
```

添加以下内容：

```ini
[Service]
Environment="OLLAMA_HOST=0.0.0.0:11434"
Environment="OLLAMA_ORIGINS=*"
```

然后重新加载并重启：

```sh
sudo systemctl daemon-reload
sudo systemctl restart ollama
```

### 防火墙 {#linux-firewall}

```sh
# UFW
sudo ufw allow 11434/tcp

# firewalld
sudo firewall-cmd --permanent --add-port=11434/tcp
sudo firewall-cmd --reload
```

### 验证 {#linux-verify}

```sh
curl http://localhost:11434/api/version
```

## OLLAMA_ORIGINS {#ollama-origins}

| 值                                        | 说明         |
| ----------------------------------------- | ------------ |
| `*`                                       | 允许所有来源 |
| `http://localhost:3000`                   | 允许特定来源 |
| `http://localhost:3000,https://myapp.com` | 多个来源     |
