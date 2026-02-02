# ubuntu

Ubuntu

## 配置阿里云镜像

### 备份配置文件

```sh
sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak
```

### 阿里云公网镜像

```sh
sudo sed -i "s@http://.*archive.ubuntu.com@https://mirrors.aliyun.com@g" /etc/apt/sources.list
sudo sed -i "s@http://.*security.ubuntu.com@https://mirrors.aliyun.com@g" /etc/apt/sources.list
```

### 阿里云 ECS VPC 镜像

```sh
sudo sed -i "s@http://.*archive.ubuntu.com@http://mirrors.cloud.aliyuncs.com@g" /etc/apt/sources.list
sudo sed -i "s@http://.*security.ubuntu.com@http://mirrors.cloud.aliyuncs.com@g" /etc/apt/sources.list
```
