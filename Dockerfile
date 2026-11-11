FROM node:22-alpine3.21
RUN apk update && apk upgrade --no-cache
WORKDIR /app
COPY package.json ./
COPY bin ./bin
COPY glama.json server.json README.md LICENSE ./
RUN chmod +x /app/bin/cli.mjs
USER node
ENTRYPOINT ["node", "/app/bin/cli.mjs"]
