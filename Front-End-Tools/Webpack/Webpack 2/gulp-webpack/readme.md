# gulp-webpack



## task-test-runner


https://webpack.js.org/guides/task-test-runner/



https://www.npmjs.com/package/gulp-webpack



var gulp = require('gulp');
var webpack = require('gulp-webpack');
gulp.task('default', function() {
    return gulp.src('src/entry.js')
        .pipe(webpack())
        .pipe(gulp.dest('dist/'));
});














