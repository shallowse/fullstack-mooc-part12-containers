# Exercise 12.11

```
Script started on 2022-11-06 18:53:45+02:00 [TERM="xterm-256color" TTY="/dev/pts/0" COLUMNS="121" LINES="40"]
$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                         NAMES
07a1ff726c27   redis     "docker-entrypoint.s…"   33 minutes ago   Up 33 minutes   0.0.0.0:6378->6379/tcp, :::6378->6379/tcp     todo-backend_redis_1
b861b8dfc515   mongo     "docker-entrypoint.s…"   33 minutes ago   Up 33 minutes   0.0.0.0:3456->27017/tcp, :::3456->27017/tcp   todo-backend_mongo_1
$ docker exec -it todo-backend_redis_1 redis-cli
127.0.0.1:6379> KEYS *
1) "RAND_KEY"
127.0.0.1:6379> GET RAND_KEY
"5"
127.0.0.1:6379> SET RAND_KEY 9001
OK
127.0.0.1:6379> GET RAND_KEY
"9001"
127.0.0.1:6379> GET RAND_KEY
"9002"
127.0.0.1:6379> DEL RAND_KEY
(integer) 1
127.0.0.1:6379> KEYS *
(empty array)
127.0.0.1:6379> GET RAND_KEY
"1"
127.0.0.1:6379> GET RAND_KEY
"5"
127.0.0.1:6379> GET RAND_KEY
"6"
127.0.0.1:6379> exit
$ exit
exit

Script done on 2022-11-06 18:55:35+02:00 [COMMAND_EXIT_CODE="0"]
```
