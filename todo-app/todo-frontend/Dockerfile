FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV REACT_APP_BACKEND_URL=http://localhost:3000
ENV PORT=3001
CMD ["npm", "start"]