# windows

Windows

## 配置代理

```powershell
[System.Environment]::SetEnvironmentVariable("http_proxy", "http://127.0.0.1:7890", "User")
[System.Environment]::SetEnvironmentVariable("https_proxy", "http://127.0.0.1:7890", "User")
```
