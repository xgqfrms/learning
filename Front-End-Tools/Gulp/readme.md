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






## concat, livereload, uglify, minify, watch





## Source maps
源映射是一种方便的方式，使浏览器知道原始文件的位置
某些资源像JavaScript或CSS文件。


$ gulp sass


## Sass(.scss)

$ npm i gulp-sass -D


https://gist.github.com/xgqfrms-GitHub/aec1e8560ec9e7686985976a7f4c3a01


## .pipe(smaps.write('../maps')) ? the only one map folder === OK

gulp.task('sass1', function() {
    gulp.src('./Sass/**/*.scss')
        .pipe(smaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(smaps.write('../maps'))
        .pipe(gulp.dest('./build/css1'));
});

gulp.task('sass2', function() {
    gulp.src('./Sass/**/*.scss')
        .pipe(smaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(smaps.write('../maps'))
        .pipe(gulp.dest('./build/css2'));
});

gulp.task('default', ['sass1', 'sass2']);




## Chrome 

F12 > Resource maps


## Chrome console debug .ts

TypeScript Source maps debug




## Restoring order 还原顺序


这可能发生的情况是一堆CSS文件的连接。
顺序在这样的文件中非常重要，因为它可能使您的应用程序看起来不同于您想要的。



## multi 文件合并

gulp-concat

它的作用是将流合并为一个文件，在此特定情况下，all.css文件。


这使得非常容易将脚本捆绑在一起，并减少浏览器需要提取的文件数。


gulp.task('sass-concat-all', function() {
    gulp.src('./Sass/**/*.scss')
        .pipe(smaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('all.css'))
        .pipe(smaps.write('./maps'))
        .pipe(gulp.dest('./build/css'));
});





all.css


gulp.task('all-css', function () {
return gulp.src('./Sass/**/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./build/css'));
});


这不是我们想要的，因为使div边框为红色的样式应该成为文件中的最后一个。 我们可以用不同的方式做到这一点; 让我们研究一下如何。


## Ordering via gulp.src

通过 gulp.src 排序


gulp.task('css', function () {
return gulp.src(['./Assets/css/styles.css', './Assets/css/**/*.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./wwwroot/css'));
});


可以使用一个数组来存放你想要的文件顺序。




styles.css文件作为排序中的第一个，
并且在文件夹中按文件名的顺序保持其余文件，all.css文件被生成。




## Ordering with gulp-order

通过 gulp-order 排序

$ npm i gulp-order -D



即使通过gulp.src排序工作，它使它容易改变，实际上做两件事：抓取文件和排序。


从关注点分离的角度来看，这并不总是希望的。




gulp.task('css', function () {
return gulp.src('./Assets/css/**/*.css')
    .pipe(order(['styles.css', '*.css']))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./wwwroot/css'));
});



gulp.task('sass-order', function() {
    gulp.src('./Sass/**/*.scss')
        .pipe(smaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(order(['styles.scss', '*.scss']))
        .pipe(concat('all.css'))
        .pipe(smaps.write('./maps'))
        .pipe(gulp.dest('./build/css'));
});



## Logging

记录, 日志















































## Gulp.js Build System 

https://www.youtube.com/watch?v=LmdT2zhFmn4&list=PLv1YUP7gO_viROuRcGsDCNM-FUVgMYb_G
















