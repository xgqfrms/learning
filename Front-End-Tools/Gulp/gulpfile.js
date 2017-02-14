"use strict";

let gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    tsc = require('gulp-typescript'),
    smaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    order = require('gulp-order'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel');

gulp.task('coffee', function() {
    gulp.src('./src/Coffee/**/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('./build/Coffee'));
});

gulp.task('coffee-bare', function() {
    gulp.src('./src/Coffee/**/*.coffee')
        .pipe(coffee({ bare:true}))
        .pipe(gulp.dest('./build/CoffeeBare'));
});

gulp.task('coffee-bare-error', function() {
    gulp.src('./src/Coffee/**/*.coffee')
        .pipe(coffee({ bare:true}).on('error', function (e) {
            console.log(e + '\r\n There\'s something wrong with the CoffeeScript file(s)');
        }))
        .pipe(gulp.dest('./build/CoffeeBare'));
});

gulp.task('typescript', function() {
    gulp.src('./src/TypeScript/**/*.ts')
        .pipe(tsc())
        .pipe(gulp.dest('./build/TypeScript'));
});

gulp.task('typescript-options', function() {
    gulp.src('./src/TypeScript/**/*.ts')
        .pipe(smaps.init())
        .pipe(tsc({target:'ES5'}))
        .pipe(smaps.write('../maps'))
        .pipe(gulp.dest('./build/TypeScript'));
});

gulp.task('babel-es5', function() {
    gulp.src('./src/ES6/**/*.js')
        .pipe(smaps.init())
        .pipe(babel({presets: ['es2015']}))
        .pipe(smaps.write('../maps'))
        .pipe(gulp.dest('./build/ES5'));
});


// inline-map === .pipe(smaps.write())
gulp.task('sass-inline-map', function() {
    gulp.src('./Sass/**/*.scss')
        .pipe(smaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(smaps.write())
        .pipe(gulp.dest('./build/css'));
});

// separate .map file === .pipe(smaps.write('./maps')) || .pipe(smaps.write('../maps'))
gulp.task('sass', function() {
    gulp.src('./src/Sass/**/*.scss')
        .pipe(smaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(smaps.write('../maps'))
        .pipe(gulp.dest('./build/css'));
});


// concat all
gulp.task('sass-concat-all', function() {
    gulp.src('./src/Sass/**/*.scss')
        .pipe(smaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('all.css'))
        .pipe(smaps.write('../maps'))
        .pipe(gulp.dest('./build/css'));
});

// order
gulp.task('sass-order', function() {
    gulp.src('./src/Sass/**/*.scss')
        .pipe(smaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(order(['styles.scss', '*.scss']))
        .pipe(concat('all.css'))
        .pipe(smaps.write('../maps'))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', ['coffee']);

gulp.task('default', ['coffee', 'watch']);

// .pipe(smaps.write('../maps')) ? the only one map folder === OK

// gulp.task('sass1', function() {
//     gulp.src('./src/Sass/**/*.scss')
//         .pipe(smaps.init())
//         .pipe(sass({outputStyle: 'compressed'}))
//         .pipe(smaps.write('../maps'))
//         .pipe(gulp.dest('./build/css1'));
// });

// gulp.task('sass2', function() {
//     gulp.src('./src/Sass/**/*.scss')
//         .pipe(smaps.init())
//         .pipe(sass({outputStyle: 'compressed'}))
//         .pipe(smaps.write('../maps'))
//         .pipe(gulp.dest('./build/css2'));
// });

// gulp.task('default', ['sass1', 'sass2']);

