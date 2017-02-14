"use strict";

let gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    tsc = require('gulp-typescript'),
    smaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel');

gulp.task('coffee', function() {
    gulp.src('./Coffee/**/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('./build/Coffee'));
});

gulp.task('coffee-bare', function() {
    gulp.src('./Coffee/**/*.coffee')
        .pipe(coffee({ bare:true}))
        .pipe(gulp.dest('./build/CoffeeBare'));
});

gulp.task('coffee-bare-error', function() {
    gulp.src('./Coffee/**/*.coffee')
        .pipe(coffee({ bare:true}).on('error', function (e) {
            console.log(e + '\r\n There\'s something wrong with the CoffeeScript file(s)');
        }))
        .pipe(gulp.dest('./build/CoffeeBare'));
});

gulp.task('typescript', function() {
    gulp.src('./TypeScript/**/*.ts')
        .pipe(tsc())
        .pipe(gulp.dest('./build/TypeScript'));
});

gulp.task('typescript-options', function() {
    gulp.src('./TypeScript/**/*.ts')
        .pipe(smaps.init())
        .pipe(tsc({target:'ES5'}))
        .pipe(smaps.write('./maps'))
        .pipe(gulp.dest('./build/TypeScript'));
});

gulp.task('babel-es5', function() {
    gulp.src('./ES6/**/*.js')
        .pipe(smaps.init())
        .pipe(babel({presets: ['es2015']}))
        .pipe(smaps.write('./maps'))
        .pipe(gulp.dest('./build/ES5'));
});

gulp.task('watch', ['coffee']);

gulp.task('default', ['coffee', 'watch']);

