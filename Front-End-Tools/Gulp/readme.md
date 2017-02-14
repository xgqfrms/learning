# Gulp

https://www.npmjs.com/search?q=gulp

https://www.npmjs.com/search?q=gulp&page=2

9100 PACKAGES FOUND
for "gulp"




## out of the box 开箱即用  

$ npm i gulp-inject rimraf gulp-concat -D

$ npm i gulp-cssmin gulp-uglify -D

$ npm i gulp.spritesmith -D

$ npm i gulp-imagemin -D


$ npm i gulp-less gulp-autoprefixer gulp-if gulp-rename gulp-eslint gulp-load-plugins gulp-imagemin gulp-watch gulp-filter replace-ext gulp-clean-css gulp-changed -D


$ npm i gulp-htmlmin gulplog http-proxy-middleware gulp-jshint gulp-template gulp-zip gulp-debug run-sequence gulp-rev -D




gulp-less

gulp-autoprefixer

gulp-if

gulp-rename

gulp-eslint

gulp-load-plugins


gulp-imagemin

gulp-watch

gulp-filter

replace-ext

gulp-clean-css

gulp-changed


gulp-htmlmin

gulplog

http-proxy-middleware

gulp-jshint

gulp-template

gulp-zip

gulp-debug

run-sequence

gulp-rev





https://developer.yahoo.com/performance/rules.html#expires=


Best Practices for Speeding Up Your Web Site

加速您的网站的最佳实践

The Exceptional Performance team has identified a number of best practices for making web pages fast. The list includes 35 best practices divided into 7 categories.

卓越绩效团队已经确定了一些快速制作网页的最佳做法。该清单包括35个最佳做法，分为7个类别。



















## 网站工具化和自动化  



https://classroom.udacity.com/settings/courses


https://classroom.udacity.com/courses/ud892/lessons/5332430841/concepts/53580095540923


## Gulp4  vs Gulp3

https://gist.github.com/xgqfrms-GitHub/1e877684a302fb70570f1f17f2b2819e




# 开箱即用

$ npm init
$ npm i gulp -D
$ npm i gulp-coffee -D

$ npm i gulp-inject rimraf gulp-concat -D

$ npm i gulp-cssmin gulp-uglify -D

$ npm i gulp.spritesmith -D

$ npm i gulp-imagemin -D

$ npm i gulp-typescript -D






"devDependencies": {
    "babel-preset-es2015": "^6.22.0",
    "gulp": "^3.9.1",
    "gulp-babel": "^6.1.2",
    "gulp-coffee": "^2.3.3",
    "gulp-concat": "^2.6.1",
    "gulp-cssmin": "^0.1.7",
    "gulp-imagemin": "^3.1.1",
    "gulp-inject": "^4.2.0",
    "gulp-logger": "0.0.2",
    "gulp-order": "^1.1.1",
    "gulp-sass": "^3.1.0",
    "gulp-sourcemaps": "^2.4.1",
    "gulp-typescript": "^3.1.4",
    "gulp-uglify": "^2.0.1",
    "gulp-util": "^3.0.8",
    "gulp.spritesmith": "^6.3.0",
    "typescript": "^2.1.6"
}














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



console.log


gulp-util

$ npm i gulp-util -D


gutil = require('gulp-util');


gulp.task('log', function () {
    gutil.beep();
    gutil.log(gutil.colors.red.underline('Error'), 'Something went terribly
    wrong...');
    gutil.log(gutil.colors.bgGreen('OK'), 'Everything went smooth.');
});


gulp-util colors




gulp-logger


$ npm i gulp-logger -D


logger = require('gulp-logger');


logger = require('gulp-logger');gulp.task('css:sass', function () {
gulp.src('./Assets/Sass/**/*.scss')
    .pipe(logger({
        before: 'Going to process Sass files...',
        after: 'Sass files were processed...',
        beforeEach: 'Processing... ',
        afterEach: ' ...Done'
    }))
    .pipe(sass())
    .pipe(gulp.dest('./wwwroot/css'));
});






https://www.npmjs.com/package/gulp-util



https://www.npmjs.com/package/gulp-logger











## Cleaning up


gulp.task('default', ['clean','build','watch','connect']);


https://www.npmjs.com/package/gulp-clean


https://github.com/robrich/gulp-rimraf  
https://www.npmjs.com/package/gulp-rimraf  



https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md



del = require('del');


gulp.task('clean', function () {
    return del(['./wwwroot/css', './wwwroot/js', '!./wwwroot/config.json']);
});

gulp.task('build', function () {
    console.log('Building stuff - using less and coffeescript');
});

gulp.task('default', ['clean', 'build']);



## Load plugins dynamically


动态加载插件


gulp-load-plugins

$ npm i gulp-load-plugins -D




var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

gulp.task('css:less', function () {
    return gulp.src('./b.less')
    .pipe(plugins.less())
    .pipe(gulp.dest('./'));
});

gulp.task('css:sass', function () {
    return gulp.src('./c.scss')
    .pipe(plugins.sass())
    .pipe(gulp.dest('./'));
});

gulp.task('default', function () {
    return plugins.util.log('Gulp is running!')
});



Instead of writing less(), we then write plugins.less() to make it work.

代替写less（），我们写plugins.less（）使它工作。







let gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();


let gulp = require('gulp'),
    del = require('del'),
    less = require('gulp-less'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    order = require('gulp-order'),
    filesize = require('gulp-filesize'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minify = require('gulp-minify'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    jade = require('gulp-jade'),
    minifyCss = require('gulp-clean-css'),
    coffee = require('gulp-coffee');







## Chapter 5 Gulp in Visual Studio


http://www.asp.net/mvc/overview/performance/bundling-and-minification


https://docs.microsoft.com/en-us/aspnet/mvc/overview/performance/bundling-and-minification

Bundling and Minification

捆绑和缩小



## Grunt code vs. Gulp code

Grunt is all about configuration over coding, while Gulp is all about configuration through code.


Grunt是关于如何通过编码来实现配置，而Gulp是关于通过配置来实现编码。

// gruntfile.js

module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    "wwwroot/css/app.css": "Assets/*.less"
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            single_file: {
                src: 'wwwroot/css/app.css',
                dest: 'wwwroot/css/single_file.css'
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('css:less', ['less', 'autoprefixer']);
};


// gulpfile.js

var gulp = require('gulp'),
    less = require('gulp-less'),
    prefix = require('gulp-autoprefixer')；

gulp.task('css:less', function () {
    gulp.src('./Assets/*.less')
    .pipe(less())
    .pipe(prefix({ browsers: ['last 2 versions'], cascade: true }))
    .pipe(gulp.dest('./wwwroot/css/'));
});







## out of the box 开箱即用


$ npm i gulp-inject rimraf gulp-concat -D

$ npm i gulp-cssmin gulp-uglify -D





？？？ images 



/// <binding Clean='clean' />
var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    project = require("./project.json");

var paths = {
    webroot: "./" + project.webroot + "/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    gulp.src([paths.js, "!" + paths.minJs], { base: "." })
    .pipe(concat(paths.concatJsDest))
    .pipe(uglify())
    .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    gulp.src([paths.css, "!" + paths.minCss])
    .pipe(concat(paths.concatCssDest))
    .pipe(cssmin())
    .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);






out of the box

https://www.visualstudio.com/zh-hans/




## gulp-inject


$ npm i gulp-inject -D




var gulp = require("gulp"),
    inject = require('gulp-inject');

gulp.task("inject", function () {
    var target = gulp.src('./Views/Shared/_layout.cshtml');
    var sources = gulp.src('./wwwroot/css/**/*.css');
    return target
        .pipe(inject(sources))
        .pipe(gulp.dest('./Views/Shared/'));
});
















## Gulp.js Build System 

https://www.youtube.com/watch?v=LmdT2zhFmn4&list=PLv1YUP7gO_viROuRcGsDCNM-FUVgMYb_G
















