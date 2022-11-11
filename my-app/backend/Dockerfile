FROM node:16-alpine as production

WORKDIR /usr/src/app

COPY package.json .

COPY package-lock.json .

RUN npm ci

COPY . .

ENV PORT=6453

CMD npm start
