var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    return browserify('./src/main.js')
        .bundle()
        .pipe(source('library.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    gulp.watch(['./src/**/*.js'], ['compile']);
});

gulp.task('compile', ['browserify']);
gulp.task('default', ['compile', 'watch']);