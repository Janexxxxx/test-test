# Dockerfile

# 使用 Node.js 官方镜像作为基础镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package.json pnpm-lock.yaml ./

# 安装项目依赖
RUN npm install -g pnpm

RUN pnpm install

# 复制应用程序代码到工作目录
COPY . .

# 构建应用程序
RUN pnpm run build

# 暴露容器的端口，如果你的应用使用的是 80 端口，可以设置为 80
EXPOSE 80

# 容器启动时执行的命令
CMD ["pnpm", "start"]
