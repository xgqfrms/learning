# robomongo  


## Robomongo  

http://www.robomongo.org/  
https://github.com/paralect/robomongo  


## mongodb (online database)  

https://mlab.com/  
https://mlab.com/databases/node-mongodb  


```sh
node-mongodb

ds111188.mlab.com:11188

xnode

123456

``` 



## To connect using the mongo shell:  

```sh
mongo ds111188.mlab.com:11188/node-mongodb -u <dbuser> -p <dbpassword>
``` 

## To connect using a driver via the standard MongoDB URI (what's this?):  

```sh
mongodb://<dbuser>:<dbpassword>@ds111188.mlab.com:11188/node-mongodb
``` 

## standard MongoDB URI  

http://docs.mlab.com/connecting/#connect-string  


http://docs.mlab.com/data-api  

## Connection String URI Format  

https://docs.mongodb.com/v3.0/reference/connection-string/  
https://docs.mongodb.com/v3.2/reference/connection-string/  

https://docs.mongodb.com/manual/reference/connection-string/  
v3.4  

https://docs.mongodb.com/manual/applications/drivers/  
https://docs.mongodb.com/manual/reference/connection-string/  

http://mongodb.github.io/node-mongodb-native  
https://github.com/mongodb/node-mongodb-native/releases  



```sh
mongodb://xnode:123456@ds111188.mlab.com:11188/node-mongodb

mongodb://xnode123456@ds111188.mlab.com:11188/node-mongodb

# ???  

node-mongodb

ds111188.mlab.com:11188

xnode

123456

``` 


## mongodb-uri  

https://docs.mongodb.com/manual/reference/connection-string/  
https://www.npmjs.com/package/mongodb-uri  
https://github.com/mongolab/mongodb-uri-node  

```js
$ npm install mongodb-uri


var mongodbUri = require('mongodb-uri');

var uri = 'mongodb://username:password@host:1234/database?authSource=admin';


var uriObject = mongodbUri.parse(uri);

console.log(JSON.stringify(uriObject, null, 2));

``` 


