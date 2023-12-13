# Dockerfile

# 使用 Node.js 官方镜像作为基础镜像
FROM node:14 AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package.json package-lock.json ./

# 安装项目依赖
RUN npm install

# 复制应用程序代码到工作目录
COPY . .

# 打包应用程序
RUN npm run build

# 使用 Nginx 镜像作为基础镜像
FROM nginx:latest

# 复制打包好的 dist 目录到 Nginx 默认静态文件目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露容器的端口
EXPOSE 80
