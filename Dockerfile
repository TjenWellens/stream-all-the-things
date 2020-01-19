FROM node:11.10.0-alpine AS build

RUN apk add --update --no-cache \
    python \
    make \
    g++

WORKDIR /src
COPY ./package* ./

RUN npm ci

COPY . .

RUN npm run format
RUN npm run build
RUN npm run test

RUN npm prune --production


FROM node:11.10.0-alpine

ENV PORT=1234
EXPOSE $PORT

WORKDIR /usr/src/service

COPY --from=build /src/node_modules node_modules
COPY --from=build /src/dist dist

USER node

CMD ["node", "./dist/server/index.js"]