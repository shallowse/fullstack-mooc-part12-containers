# Exercise 12.2

```
Script started on 2022-11-06 13:25:26+02:00 [TERM="xterm-256color" TTY="/dev/pts/0" COLUMNS="127" LINES="59"]
$ docker container run -it ubuntu bash
        docker container run -it ubuntu bash

Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu

e96e057aae67: Pulling fs layer 

e96e057aae67: Downloading [>                                                  ]  309.6kB/30.43MB

e96e057aae67: Downloading [====>                                              ]  2.497MB/30.43MB

e96e057aae67: Downloading [========>                                          ]  4.987MB/30.43MB

e96e057aae67: Downloading [===========>                                       ]  7.179MB/30.43MB

e96e057aae67: Downloading [==============>                                    ]  9.055MB/30.43MB

e96e057aae67: Downloading [=================>                                 ]  10.62MB/30.43MB

e96e057aae67: Downloading [====================>                              ]  12.17MB/30.43MB

e96e057aae67: Downloading [======================>                            ]  13.74MB/30.43MB











e96e057aae67: Pull complete 
Digest: sha256:4b1d0c4a2d2aaf63b37111f34eb9fa89fa1bf53dd6e4ca954d47caebca4005c2
Status: Downloaded newer image for ubuntu:latest
root@cb6c4f5e09a9:/# 
root@cb6c4f5e09a9:/# hostname

cb6c4f5e09a9
root@cb6c4f5e09a9:/# mkdir /usr/src/app 

root@cb6c4f5e09a9:/# touch /usr/src/app/index.js

root@cb6c4f5e09a9:/# ls -l /usr/src/app

total 0
-rw-r--r-- 1 root root 0 Nov  6 11:25 index.js
root@cb6c4f5e09a9:/# exit

exit
$ exit

exit

Script done on 2022-11-06 13:25:52+02:00 [COMMAND_EXIT_CODE="0"]
```
