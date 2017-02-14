# Gulp


## 网站工具化和自动化  



https://classroom.udacity.com/settings/courses


https://classroom.udacity.com/courses/ud892/lessons/5332430841/concepts/53580095540923


## Gulp4  vs Gulp3

https://gist.github.com/xgqfrms-GitHub/1e877684a302fb70570f1f17f2b2819e






F:\Books\Syncfusion ebooks\2016-Succinctly-ebook-pdf\Gulp_Succinctly.pdf



## CoffeeScript

https://packagecontrol.io/packages/Better%20CoffeeScript



$ npm init
$ npm install gulp --save-dev
$ npm install gulp-coffee --save-dev


$ npm init
$ npm i gulp -D
$ npm i gulp-coffee -D


## Fibonacci sequence 斐波那契序列


$ gulp

$ gulp coffee-bare

$ gulp coffee-bare-error






## TypeScript



http://www.typescriptlang.org/

http://www.typescriptlang.org/#download-links

http://www.typescriptlang.org/play/index.html

http://www.typescriptlang.org/community/index.html


INSTALL

$ npm install -g typescript

COMPILE

$ tsc helloworld.ts


$ npm i typescript -D

$ tsc -v


https://www.npmjs.com/package/gulp-typescript


$ npm install gulp-typescript 

$ npm i gulp-typescript -D





$ npm i typescript gulp-typescript -D




https://github.com/ivogabe/gulp-typescript

## Options

target (string) - Specify ECMAScript target version: 'ES3' (default), 'ES5' or 'ES6'.


Sourcemap options (sourceMap, inlineSourceMap, inlineSources, sourceRoot) - Use gulp-sourcemaps instead.

https://github.com/floridoo/gulp-sourcemaps


$ npm i gulp-sourcemaps -D

var sourcemaps = require('gulp-sourcemaps');

.pipe(sourcemaps.write())


sourcemaps.write()


https://gist.github.com/xgqfrms-GitHub/d8b8b43ac51d99bacfb422a6b62df4ed

https://github.com/ivogabe/gulp-typescript/issues/483

https://www.typescriptlang.org/docs/handbook/compiler-options.html




## .pipe(smaps.init()) ... .pipe(smaps.write('./maps'))

```
--sourceMap boolean false   Generates corresponding .map file.


gulp.task('typescript-options', function() {
    gulp.src('./TypeScript/**/*.ts')
        .pipe(smaps.init())
        .pipe(tsc({target:'ES5'}))
        .pipe(smaps.write('./maps'))
        .pipe(gulp.dest('./build/TypeScript'));
});


```


$ gulp typescript
$ gulp typescript-options







NativeScript 2


http://www.telerik.com/nativescript  
https://github.com/NativeScript/NativeScript  

Angular 2

https://angular.io/





## ES6 to ES5


$ gulp babel-es5

class

constructor

super() 

https://gist.github.com/xgqfrms-GitHub/aec1e8560ec9e7686985976a7f4c3a01

https://www.npmjs.com/package/gulp-babel



$ npm install --save-dev gulp-babel babel-preset-es2015

$ npm i gulp-babel babel-preset-es2015 -D

const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('default', () => {
    return gulp.src('src/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});



const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
 
gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});




https://www.npmjs.com/package/gulp-babel


https://www.npmjs.com/package/gulp-inline-ng2-template

https://github.com/ludohenin/gulp-inline-ng2-template




$ npm i gulp-concat gulp-sourcemaps gulp-babel babel-preset-es2015 -D
$ npm i gulp-concat gulp-babel babel-preset-es2015 -D






## concat, livereload, uglify, 




















## Gulp.js Build System 

https://www.youtube.com/watch?v=LmdT2zhFmn4&list=PLv1YUP7gO_viROuRcGsDCNM-FUVgMYb_G
















