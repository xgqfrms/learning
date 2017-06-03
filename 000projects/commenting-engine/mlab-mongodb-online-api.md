# mlab api


https://mlab.com/

https://mlab.com/home?newLogin=1

https://docs.mlab.com/


```sh

$ % mongo ds012345.mlab.com:56789/dbname -u dbuser -p dbpassword

```

https://docs.mlab.com/connecting/#methods


https://docs.mlab.com/migrating/


https://docs.mongodb.com/manual/applications/drivers/

https://docs.mongodb.com/v3.2/applications/drivers/

https://docs.mlab.com/languages/

https://github.com/mongolab/mongodb-driver-examples/blob/master/nodejs/nodeSimpleExample.js


# data-api

https://docs.mlab.com/data-api/


https://api.mlab.com/api/1/databases?apiKey=2E81PUmPFI84t7UIc_5YdldAp1ruUPKye

> apiKey: 

https://docs.mongodb.com/v3.2/reference/mongodb-extended-json/

## GET /databases

https://api.mlab.com/api/1/databases?apiKey=myAPIKey

## GET /clusters/{cluster}/databases

https://api.mlab.com/api/1/clusters/cluster-id/databases?apiKey=myAPIKey

## GET /databases/{database}/collections

https://api.mlab.com/api/1/databases/my-db/collections?apiKey=myAPIKey

## GET /databases/{database}/collections/{collection}

Example listing all documents in a given collection:
https://api.mlab.com/api/1/databases/my-db/collections/my-coll?apiKey=myAPIKey

Optional parameters
[q=<query>][&c=true][&f=<fields>][&fo=true][&s=<order>][&sk=<skip>][&l=<limit>]


```code
"q" example - return all documents with "active" field of true:
https://api.mlab.com/api/1/databases/my-db/collections/my-coll?q={"active": true}&apiKey=myAPIKey

"c" example - return the count of documents with "active" of true:
https://api.mlab.com/api/1/databases/my-db/collections/my-coll?q={"active": true}&c=true&apiKey=myAPIKey

"f" example (include) - return all documents but include only the "firstName" and "lastName" fields:
https://api.mlab.com/api/1/databases/my-db/collections/my-coll?f={"firstName": 1, "lastName": 1}&apiKey=myAPIKey

"f" example (exclude) - return all documents but exclude the "notes" field:
https://api.mlab.com/api/1/databases/my-db/collections/my-coll?f={"notes": 0}&apiKey=myAPIKey

"fo" example - return a single document matching "active" field of true:
https://api.mlab.com/api/1/databases/my-db/collections/my-coll?q={"active": true}&fo=true&apiKey=myAPIKey

"s" example - return all documents sorted by "priority" ascending and "difficulty" descending:
 https://api.mlab.com/api/1/databases/my-db/collections/my-coll?s={"priority": 1, "difficulty": -1}&apiKey=myAPIKey

"sk" and "l" example - sort by "name" ascending and return 10 documents after skipping 20
 https://api.mlab.com/api/1/databases/my-db/collections/my-coll?s={"name":1}&sk=20&l=10&apiKey=myAPIKey
```

## Insert document

POST /databases/{database}/collections/{collection}
Content-Type: application/json
Body: <JSON data>

Example (using jQuery):

$.ajax( 
    {
        url: "https://api.mlab.com/api/1/databases/my-db/collections/my-coll?apiKey=myAPIKey",
        data: JSON.stringify( { "x" : 1 } ),
        type: "POST",
        contentType: "application/json" 
    }
);

## Insert multiple documents

POST /databases/{database}/collections/{collection}
Content-Type: application/json
Body: <JSON data>

Example (using jQuery):

$.ajax({
    url: "https://api.mlab.com/api/1/databases/my-db/collections/my-coll?apiKey=myAPIKey",
    data: JSON.stringify( [ { "x" : 1 }, { "x" : 2 }, { "x" : 3 } ] ),
    type: "POST",
    contentType: "application/json"
});

## Update multiple documents

PUT /databases/{database}/collections/{collection}
Content-Type: application/json
Body: <JSON data>

Example setting "x" to 3 in the document with "_id" = 1234 (using jQuery):

$.ajax({
    url: 'https://api.mlab.com/api/1/databases/my-db/collections/my-coll?apiKey=myAPIKey&q={"_id":1234}',
    data: JSON.stringify({"$set" : {"x": 3 }}),
    type: "PUT",
    contentType: "application/json" 
});

Optional parameters:
[q=<query>][&m=true][&u=true]

## Delete/replace multiple documents


PUT /databases/{database}/collections/{collection}
Content-Type: application/json
Body: <JSON data>

Example (using jQuery):

$.ajax({
    url: 'https://api.mlab.com/api/1/databases/my-db/collections/my-coll?apiKey=myAPIKey',
    data: JSON.stringify( [ { "x" : 1 }, { "x" : 2 }, { "x" : 3 } ] ),
    type: "PUT",
    contentType: "application/json" 
});

Optional parameters:
[q=<query>]


## CURL

DELETE /databases/{database}/collections/{collection}/{_id}

Example (using cURL): 
curl -X DELETE 'https://api.mlab.com/api/1/databases/my-db/collections/my-coll/4e7315a65e4ce91f885b7dde?apiKey=myAPIKey

Example (using jQuery):

$.ajax({
    url: "https://api.mlab.com/api/1/databases/my-db/collections/my-coll/4e7315a65e4ce91f885b7dde?apiKey=myAPIKey",
    type: "DELETE",
    async: true,
    timeout: 300000,
    success: function (data) { },
    error: function (xhr, status, err) { } 
});

## UTF-8 Characters

POST /databases/{database}/collections/{collection}
Content-Type: application/json;charset=utf-8
Body: <JSON data>

Example (using jQuery):

$.ajax({
    url: "https://api.mlab.com/api/1/databases/my-db/collections/my-coll?apiKey=myAPIKey",
    data: JSON.stringify( { "Iñtërnâtiônàlizætiøn" : true } ),
    type: "POST",
    contentType: "application/json; charset=utf-8"
});











