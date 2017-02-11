var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync');

gulp.task('default', ['sass', 'css', 'js', 'html', 'watch']);

gulp.task('sass', function() {
   sass('app/**/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('app/'));
    
    gulp.src('app/**/*.css')
    .pipe(cssnano())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('css', function() {
    // return gulp.src('app/**/*.css')
    // .pipe(cssnano())
    // .pipe(concat('main.css'))
    // .pipe(gulp.dest('public/css'));
});

gulp.task('js', function() {
    return gulp.src('app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('html', function() {
   return gulp.src('app/**/*.html')
   .pipe(gulp.dest('public/'));
});

gulp.task('browser-sync', function() {
    browserSync({
        files: 'index.html, public/css/main.css, public/js/main.js', 
        port: 8082
    });
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.scss', ['sass', 'css']); 
    gulp.watch('app/**/*.js', ['js']);
    gulp.watch('app/**/*.html', ['html']);
});

