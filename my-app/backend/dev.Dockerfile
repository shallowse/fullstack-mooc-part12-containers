FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV PORT=6453

CMD npm run start-nodemon
