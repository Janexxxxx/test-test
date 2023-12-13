# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx

# 将本地的 dist 文件夹拷贝到 Nginx 的默认目录
COPY dist /usr/share/nginx/html

# 暴露 Nginx 的默认端口
EXPOSE 8288

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
