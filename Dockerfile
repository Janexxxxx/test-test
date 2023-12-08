# Dockerfile

# 使用 Node.js 官方镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制应用程序代码到工作目录
COPY . .

# 构建应用程序
RUN npm run build

# 设置容器启动时执行的命令
CMD ["npm", "start"]
