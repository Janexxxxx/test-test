# 使用 Node.js 官方镜像作为基础镜像
FROM node:18 AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package.json pnpm-lock.yaml ./

# 安装项目依赖
RUN npm install -g pnpm
RUN pnpm install

# 复制应用程序代码到工作目录
COPY . .

# 打包应用程序
RUN pnpm run build

# 使用 Nginx 镜像作为基础镜像
FROM nginx:latest

# 指定目录，确保该目录在服务器上存在，如果不存在，可以提前创建
ARG TARGET_DIR=/usr/share/nginx/html

# 复制打包好的 dist 目录到指定目录
COPY --from=builder /app/dist $TARGET_DIR

# # 设置文件权限
# RUN chmod -R 755 /usr/share/nginx/html

# 输出复制后的文件结构
# RUN ls -R $TARGET_DIR

# 暴露容器的端口
EXPOSE 80
