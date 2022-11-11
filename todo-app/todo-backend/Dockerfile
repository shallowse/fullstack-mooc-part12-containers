FROM node:16
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci 

USER node

ENV PORT=3001

CMD npm start
