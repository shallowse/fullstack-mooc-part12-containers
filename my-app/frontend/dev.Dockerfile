FROM node:16 AS development

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD npm start
