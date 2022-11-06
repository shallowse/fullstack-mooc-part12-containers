# Exercise 12.8

```
Script started on 2022-11-06 18:10:44+02:00 [TERM="xterm-256color" TTY="/dev/pts/0" COLUMNS="121" LINES="40"]
$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                         NAMES
f4b1f8838e1d   mongo     "docker-entrypoint.s…"   10 minutes ago   Up 10 minutes   0.0.0.0:3456->27017/tcp, :::3456->27017/tcp   todo-backend_mongo_1
$ docker exec -it todo-backend_mongo_1 bash
root@f4b1f8838e1d:/# mongosh -u root -p example
Current Mongosh Log ID:	6367dc9d9cb8ece0ba0b94fc
Connecting to:		mongodb://<credentials>@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0
Using MongoDB:		6.0.2
Using Mongosh:		1.6.0

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2022-11-06T16:00:44.284+00:00: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
   2022-11-06T16:00:44.850+00:00: vm.max_map_count is too low
------

------
   Enable MongoDB's free cloud-based monitoring service, which will then receive and display
   metrics about your deployment (disk utilization, CPU, operation statistics, etc).
   
   The monitoring data will be available on a MongoDB website with a unique URL accessible to you
   and anyone you share the URL with. MongoDB may use this information to make product
   improvements and to suggest MongoDB products and deployment options to you.
   
   To enable free monitoring, run the following command: db.enableFreeMonitoring()
   To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
------

test> show dbs
admin         100.00 KiB
config         60.00 KiB
local          72.00 KiB
the_database   72.00 KiB
test> use the_database
switched to db the_database
the_database> show collections
todos
the_database> db.todos.find()
[
  {
    _id: ObjectId("6367ba6c28183cf7e1aa639c"),
    text: 'Kissa 123',
    done: true
  },
  {
    _id: ObjectId("6367ba6c28183cf7e1aa639d"),
    text: 'Learn about containers',
    done: false
  }
]
the_database> db.todos.insertOne({text: 'Increase the number of tools in my toolbelt', done: true })
{
  acknowledged: true,
  insertedId: ObjectId("6367dccb6157044cd6bf850b")
}
the_database> db.todos.find()
[
  {
    _id: ObjectId("6367ba6c28183cf7e1aa639c"),
    text: 'Kissa 123',
    done: true
  },
  {
    _id: ObjectId("6367ba6c28183cf7e1aa639d"),
    text: 'Learn about containers',
    done: false
  },
  {
    _id: ObjectId("6367dccb6157044cd6bf850b"),
    text: 'Increase the number of tools in my toolbelt',
    done: true
  }
]
the_database> exit
root@f4b1f8838e1d:/# exit
exit
$ exit
exit

Script done on 2022-11-06 18:12:04+02:00 [COMMAND_EXIT_CODE="0"]
```
