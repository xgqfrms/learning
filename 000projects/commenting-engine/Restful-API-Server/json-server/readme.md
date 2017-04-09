# JSON Server

```sh
$ npm i -g json-server

``` 


```sh
$ json-server --help
$ json-server --watch db.json

``` 


```json
{
    "employees": [
        {
            "id": 1,
            "first_name": "xgqfrms",
            "last_name": "xray",
            "email": "xqqfrms@gmail.com"
        },
        {
            "id": 2,
            "first_name": "webgeeker",
            "last_name": "xray",
            "email": "webgeeker@gmail.com"
        },
        {
            "id": 3,
            "first_name": "xgqfrms007",
            "last_name": "xray",
            "email": "xqqfrms007@gmail.com"
        }
    ]
}
```

> $ json-server -h

```sh
G:\wwwRoot\learning\Back-End\Node.js\JSON\JSON-REST-API-Server>json-server -h
C:\Users\xray\AppData\Roaming\npm\node_modules\json-server\bin\index.js
[options] <source>

Options:
  --config, -c       Path to config file           [default: "json-server.json"]
  --port, -p         Set port                                    [default: 3000]
  --host, -H         Set host                               [default: "0.0.0.0"]
  --watch, -w        Watch file(s)                                     [boolean]
  --routes, -r       Path to routes file
  --middlewares, -m  Paths to middleware files                           [array]
  --static, -s       Set static files directory
  --read-only, --ro  Allow only GET requests                           [boolean]
  --no-cors, --nc    Disable Cross-Origin Resource Sharing             [boolean]
  --no-gzip, --ng    Disable GZIP Content-Encoding                     [boolean]
  --snapshots, -S    Set snapshots directory                      [default: "."]
  --delay, -d        Add delay to responses (ms)
  --id, -i           Set database id property (e.g. _id)         [default: "id"]
  --quiet, -q        Suppress log messages from output                 [boolean]
  --help, -h         Show help                                         [boolean]
  --version, -v      Show version number                               [boolean]

Examples:
    C:\Users\xray\AppData\Roaming\npm\node_modules\json-server\bin\index.js db.json
    C:\Users\xray\AppData\Roaming\npm\node_modules\json-server\bin\index.js file.js
    C:\Users\xray\AppData\Roaming\npm\node_modules\json-server\bin\index.js

    http://example.com/db.json
    https://github.com/typicode/json-server
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

http://localhost:3000/
http://localhost:3000/profiles/
http://localhost:3000/profiles/2
http://localhost:3000/profiles?name=typicode3

http://localhost:3000/profiles?q=typicode3



## q = full text search (only value can search)

http://localhost:3000/posts
http://localhost:3000/posts?q=
http://localhost:3000/posts?q=json
http://localhost:3000/posts?q=server2
http://localhost:3000/posts?q=json-server2

http://localhost:3000/posts?q=typicode3

## error (key cann't search)

http://localhost:3000/posts?q=id
http://localhost:3000/posts?q=title
http://localhost:3000/posts?q=author


https://cdn.xgqfrms.xyz/json/data1.json
https://cdn.xgqfrms.xyz/json/data2.json
https://cdn.xgqfrms.xyz/json/data3.json



> G:\wwwRoot\learning\Back-End\Node.js\JSON\JSON-REST-API-Server

## JSON-REST-API-Server

https://github.com/xgqfrms-GitHub/json-server/master/README.md
https://github.com/xgqfrms-GitHub/json-server/master/Toturials/readme.md

https://github.com/typicode/json-server



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
put
delete

## faker.js

> faker.js - 在node.js和浏览器中生成大量的假数据

https://github.com/marak/Faker.js/
https://marak.github.io/faker.js/

https://www.npmjs.com/package/faker


```sh

$ npm i faker -D

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





# gulp  

http://gulpjs.com/


```sh

$ npm i gulp-cli -g
$ npm i gulp -D
$ touch gulpfile.js
$ gulp --help


``` 




## gulpfile.js

```js

const gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-csso');

gulp.task('html', function() {
    return
    gulp.src('src/templates/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/html'))
});

gulp.task('css', function() {
    return
    gulp.src('src/templates/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
});

gulp.task('default', ['html', 'css']);

``` 











