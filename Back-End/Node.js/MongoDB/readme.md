# MongoDB  


https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#install-mongodb-community-edition




```cmd

md data\db

## C:\Users\xray\Desktop\M101\data\db

md \xdata\xdb

## nothing ???

``` 
mkdir === (Equivalent Windows commands: MD - Create new folders)

```sh
mkdir data\db 

## C:\Users\xray\Desktop\M101\datadb\

mkdir \data\db

## C:\Users\xray\Desktop\M101\datadb\

http://ss64.com/bash/mkdir.html

``` 





```sh
# Start MongoDB

$ mongod

# Connect to MongoDB 

$ mongo

# stop MongoD

$ Control+C


``` 

H:\Program Files\MongoDB\Server\3.4\mongod.cfg  

mongod.cfg

```cfg
systemLog:
    destination: file
    path: x:\data\log\mongod.log
storage:
    dbPath: x:\data\db
``` 



## PS/CMD (Admin)

"H:\MongoDB\Server\3.4\bin\mongod.exe" --config "H:\MongoDB\Server\3.4\mongod.cfg" --install

## PS/CMD (Admin)


```sh
# Start the MongoDB service

$ net start MongoDB

$ net start mongodb

# Stop the MongoDB service  

$ net stop MongoDB

$ net stop mongodb

``` 




https://university.mongodb.com/


https://university.mongodb.com/courses/M101JS/about


https://www.edx.org/course/introduction-mongodb-using-mean-stack-mongodbx-m101x-0  




System error 2 has occurred.


http://stackoverflow.com/questions/4661670/cannot-start-mongodb-as-a-service


## 重新安装service


1. 卸载 old service (v3.2)

2. 重新安装 new service (v3.4)









