"use strict";
var gulp = require('gulp'),
    coffee = require('gulp-coffee');
gulp.task('coffee', function() {
    gulp.src('./Assets/Coffee/**/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('./wwwroot/scripts'));
});
gulp.task('default', ['coffee']);
