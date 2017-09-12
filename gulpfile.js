var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

gulp.task('html', () => {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('img', () => {
    return gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('sass', () =>{
    return gulp.src('src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed', includePaths: 'src/styles'})
        .on('error', (e) => {
            console.log('SASS failed to compile: ' + e);
        }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('js', () => {
    return gulp.src('src/scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('default', ['js', 'sass', 'img', 'html'], () => {
    console.log('Watching src dir...');
    return gulp.watch('src/**/*.*', ['js', 'sass', 'img', 'html'], () =>{
        console.log('done');
    });
});