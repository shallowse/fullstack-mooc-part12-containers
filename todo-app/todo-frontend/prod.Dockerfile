# https://docs.docker.com/language/nodejs/run-tests/
FROM node:16 AS build-stage

WORKDIR /usr/src/app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci
COPY . /usr/src/app
RUN npm run build

FROM node:16-alpine
WORKDIR /build
COPY --from=build-stage /usr/src/app/build /build
RUN npm install -g serve
ENV PORT=3000
CMD ["serve"]
