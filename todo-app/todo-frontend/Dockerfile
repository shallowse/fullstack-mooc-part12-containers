# https://docs.docker.com/language/nodejs/run-tests/
FROM node:16 AS base

WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as test
RUN npm ci
COPY . . 
RUN CI=true npm test

FROM base as production
RUN npm ci --production
COPY . .
ENV REACT_APP_BACKEND_URL=http://localhost:3000
ENV PORT=3001
CMD ["npm", "start"]
