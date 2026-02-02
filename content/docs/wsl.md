# wsl

WSL

## 配置代理

```sh
export hostip=$(cat /etc/resolv.conf | grep -oP '(?<=nameserver\ ).*')
export http_proxy="http://$hostip:7890"
export https_proxy="http://$hostip:7890"
```
