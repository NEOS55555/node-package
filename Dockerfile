# 这个必须是最新的，才能兼容插件信息
FROM node:14.17.6

# Create app directory
RUN mkdir -p /home/Service
WORKDIR /home/Service

# Bundle app source
COPY . /home/Service
RUN npm install

# 配置环境变量
# ENV HOST 150.158.92.110
# ENV PORT 3000
# ENV ABC abc
ENV NODE_ENV production


EXPOSE 1883
# EXPOSE 80
CMD [ "node", "server.js" ]