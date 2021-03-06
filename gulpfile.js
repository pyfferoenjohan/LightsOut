var gulp    = require('gulp');
var path    = require('path');
var plumber = require('gulp-plumber');
var watch   = require('gulp-watch');
var scss    = require('gulp-sass');
var bourbon = require('node-bourbon').includePaths;
var jshint  = require('gulp-jshint');

var jshintConfig = {
  strict    : true,
  unused    : true,
  eqeqeq    : true,
  lastsemic : true,
  indent    : 2,
};

gulp.task('scss', function() {
  gulp.src('./scss/main.scss')
    .pipe(plumber())
    .pipe(scss({
      includePaths: bourbon,
      outputStyle: 'compressed' //'nested'
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('jshint', function() {
  gulp.src('./src/**/*.js')
    .pipe(plumber())
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter('default'), {
      verbose: true
    });
});

gulp.task('default', function() {
  gulp.watch('./scss/**/*.scss', ['scss']);
  gulp.watch([
    './src/**/*.js',
    '!./lib/**/*.js'
  ], ['jshint']);
});