# Connection String URI Format  


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

http://mongodb.github.io/node-mongodb-native/2.0/tutorials/connecting/  
http://mongodb.github.io/node-mongodb-native/2.2/tutorials/connect/  
https://github.com/mongodb/node-mongodb-native  

https://docs.mongodb.com/manual/reference/connection-string/  
https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html  








