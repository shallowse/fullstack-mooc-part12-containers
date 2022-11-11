FROM node:16-alpine

WORKDIR /usr/src/app

COPY --chown=node:node . .

ENV PORT=3001

ENV NODE_ENV=production

RUN npm ci

USER node

CMD ["npm", "start"]
