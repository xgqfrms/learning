"use strict";

var gulp = require('gulp'),
    coffee = require('gulp-coffee');

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

gulp.task('watch', ['coffee']);

gulp.task('default', ['coffee', 'watch']);



