var gulp       = require('gulp');
var source     = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify   = require('reactify');
var to5ify     = require('6to5ify');
var rename     = require('gulp-rename');
var webserver  = require('gulp-webserver');

gulp.task('browserify', function () {
  var bundleStream = browserify('./src/js/main.js')
    .transform(reactify)
    .transform(to5ify)
    .bundle();

  bundleStream
    .pipe(source('main.js'))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('dist'));
});


gulp.task('server', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: false,
      directoryListing: false,
      open: true,
      fallback : 'index.html'
    }));
});


gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['build']);
});

gulp.task('build', ['browserify', 'copy']);

gulp.task('dev',['build','server','watch']);