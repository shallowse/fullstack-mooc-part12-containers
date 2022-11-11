# Excercises 12.21 - 12.22

Used documentation and examples from here to build the docker and docker-compose files.

- [Docker overview](https://docs.docker.com/get-started/overview/)
- [Reference documentation](https://docs.docker.com/reference/)
- [Samples](https://docs.docker.com/samples/)

## Structure

```
├── README.md
├── backend/
├── docker-compose.dev.yml
├── docker-compose.yml
├── frontend/
└── reverse-proxy/
```

### backend/

Contains express app

### frontend/

Contains a React app

### reverse-proxy/

Contains nginx reverse proxy configuration

## docker-compose.dev.yml

```
# https://github.com/docker/awesome-compose/tree/master/react-express-mongodb
services:
  frontend-dev:
    build:
      context: frontend
      dockerfile: dev.Dockerfile
    ports:
      - 3000:3000
    volumes:
      - ./frontend:/usr/src/app
    container_name: frontend-dev

  backend-dev:
    build:
      context: backend
      dockerfile: dev.Dockerfile
    ports:
      - 6453:6453
    volumes:
      - ./backend:/usr/src/app
    container_name: backend-dev
```

## docker-compose.yml

```
# https://github.com/docker/awesome-compose/tree/master/react-express-mongodb
# https://github.com/docker/awesome-compose/tree/master/nginx-nodejs-redis
# https://docs.docker.com/compose/compose-file/

services:
  frontend-prod:
    build:
      context: frontend
    container_name: frontend-prod
    restart: always

  backend-prod:
    build:
      context: backend
    container_name: backend-prod
    restart: always

  nginx:
    build: reverse-proxy
    ports:
      - 8080:80
    restart: always
    container_name: reverse-proxy
    depends_on:
      - frontend-prod
      - backend-prod
```