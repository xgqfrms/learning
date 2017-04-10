# JSON-REST-API-Server


> G:\wwwRoot\learning\000projects\Express-Restful-API\readme.md

> G:\wwwRoot\learning\Back-End\Node.js\JSON\JSON-REST-API-Server\readme.md

> G:\wwwRoot\learning\000projects\commenting-engine\Restful-API-Server\readme.md


https://github.com/xgqfrms-GitHub/json-server/master/README.md

https://github.com/xgqfrms-GitHub/json-server/master/Toturials/readme.md


https://github.com/typicode/json-server


```sh

$ npm install -g json-server

$ npm install -D json-server


``` 

v0.9.6 


```sh

$ json-server --help

$ json-server db.json


$ json-server --watch db.json

``` 

```json

{
    "posts": [{
        "id": 1,
        "title": "json-server",
        "author": "typicode"
    }],
    "comments": [{
        "id": 1,
        "body": "some comment",
        "postId": 1
    }],
    "profile": {
        "name": "typicode"
    }
}

``` 



https://github.com/xgqfrms-GitHub/json-server/blob/master



http://localhost:3000/posts/1

```js

{ "id": 1, "title": "json-server", "author": "typicode" }

``` 

## bugs { "objects": [{"key1": "value1"}, {"key2": "value2"}, {"key3": "value3"}]}

```js
# OK
{ "objects": [{"key1": "value1"}, {"key2": "value2"}, {"key3": "value3"}]}

# bug
{ "objects-bug": {"key1": "value1","key2": "value2","key3": "value3"}}


http://localhost:3000/objects-bug/

http://localhost:3000/objects-bug/1
http://localhost:3000/objects-bug/key1
http://localhost:3000/objects-bug/value1

``` 




http://localhost:3000/db

```json

{
    "posts": [
        {
            "id": 1,
            "title": "json-server1",
            "author": "typicode1"
        },
        {
            "id": 2,
            "title": "json-server2",
            "author": "typicode2"
        },
        {
            "id": 3,
            "title": "json-server3",
            "author": "typicode3"
        }
    ],
    "comments": [
        {
            "id": 1,
            "body": "some comment1",
            "postId": 1
        },
        {
            "id": 2,
            "body": "some comment2",
            "postId": 2
        },
        {
            "id": 3,
            "body": "some comment3",
            "postId": 3
        }
    ],
    "profile": {
        "name": "typicode1",
        "name": "typicode2",
        "name": "typicode3"
    }
}

``` 

http://localhost:3000/profile


```json

{
    "name": "typicode"
}

``` 

http://localhost:3000/comments

```json

[
    {
        "id": 1,
        "body": "some comment",
        "postId": 1
    }
]

``` 



http://localhost:3000/posts

```json

[
    {
        "id": 1,
        "title": "json-server",
        "author": "typicode"
    }
]

``` 







## JSON and AJAX Tutorial: With Real Examples

https://www.youtube.com/watch?v=rJesac0_Ftw



https://learnwebcode.github.io/json-example/animals-1.json

https://learnwebcode.github.io/json-example/animals-2.json

https://learnwebcode.github.io/json-example/animals-3.json



http://codepen.io/anon/pen/QKPJmW

http://codepen.io/anon/pen/RGOqQY



http://codepen.io/xgqfrms/pen/RpBxKO




## postman (http client)


post
get





## faker.js


https://github.com/marak/Faker.js/

faker.js - 在node.js和浏览器中生成大量的假数据

https://marak.github.io/faker.js/

https://www.npmjs.com/package/faker






```sh

$ npm install faker -D

``` 



firstName = faker.name.firstName();
lastName = faker.name.lastName();
email = faker.internet.email();





http://localhost:3000/employees

http://localhost:3000/

firstName
lastName
email

/*

$ json-server --watch db.json

$ json-server --watch fakerdb.js

*/


https://gist.github.com/xgqfrms-GitHub/cb8459af5e7db7af107a25615f738ab5















## gulp  

http://gulpjs.com/


```sh

$ npm install gulp-cli -g
$ npm install gulp -D
$ touch gulpfile.js
$ gulp --help


``` 




gulpfile.js

```js

const gulp = require('gulp'),
    pug = require('gulp-pug'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-csso');

gulp.task('html', function(){
    return 
        gulp.src('client/templates/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/html'));
});

gulp.task('css', function(){
    return 
        gulp.src('client/templates/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'));
});

gulp.task('default', [ 'html', 'css' ]);
``` 
