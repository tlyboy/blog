# ssh

SSH

## 生成新的 SSH 密钥

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

## 查看 SSH 密钥

### macOS / Linux

```sh
cat ~/.ssh/id_ed25519.pub
```

### Windows (PowerShell)

```powershell
cat $HOME\.ssh\id_ed25519.pub
```

## 配置 GitHub 在 HTTPS 端口使用 SSH

```
Host github.com
  HostName ssh.github.com
  Port 443
  User git
```

## 测试 SSH 连接

```sh
ssh -T git@github.com
```

## 配置代理

```
ProxyCommand nc -X 5 -x 127.0.0.1:7890 %h %p
```

## SSH Agent 密钥管理

### Windows 启动 ssh-agent 服务

Windows 需要先启动 ssh-agent 服务才能使用：

```powershell
Set-Service -Name ssh-agent -StartupType Automatic
Start-Service ssh-agent
```

### 添加密钥到 SSH Agent

macOS / Linux：

```sh
ssh-add ~/.ssh/id_ed25519
```

Windows (PowerShell)：

```powershell
ssh-add $HOME\.ssh\id_ed25519
```

### 查看已添加的密钥列表

```sh
ssh-add -l
```

### 从 SSH Agent 移除密钥

移除指定密钥：

macOS / Linux：

```sh
ssh-add -d ~/.ssh/id_ed25519
```

Windows (PowerShell)：

```powershell
ssh-add -d $HOME\.ssh\id_ed25519
```

移除所有密钥：

```sh
ssh-add -D
```
