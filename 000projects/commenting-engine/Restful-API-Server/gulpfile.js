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