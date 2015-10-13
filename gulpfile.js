'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(notify("Leopxard Framework: Sass Done!"));
});

gulp.task('copy', function () {
    gulp.src('./assets/icomoon/fonts/*')
    .pipe(gulp.dest('./css/fonts/clawicon/'))
    .pipe(notify("Leopard Framework: Copy Done!"));
});



gulp.task('sass:watch', function () {
    gulp.watch(['./sass/**/*.scss','./assets/**/*.scss'], ['sass','copy']);
});