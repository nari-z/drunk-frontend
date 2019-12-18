FROM node:8.15.0-alpine

WORKDIR /app

RUN apk update && \
    npm install -g npm && \
    npm install -g @vue/cli

EXPOSE 9000

CMD ["/bin/sh"]

