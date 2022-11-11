# https://github.com/docker/awesome-compose/tree/master/react-nginx

FROM node:16 AS prod-build

WORKDIR /usr/src/app

COPY package.json .

COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

###############################

FROM nginx:1.23.2-alpine AS production

COPY --from=prod-build /usr/src/app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=prod-build /usr/src/app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
