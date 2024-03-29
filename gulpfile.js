var gulp = require('gulp');
var ts = require('gulp-typescript');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify'); 

var scripts = [
    './app/vendors/angular/angular.js',
//    './app/vendors/angular-bootstrap/ui-bootstrap-tpls.js',
    './app/vendors/angular-ui-router/release/angular-ui-router.js',
//    './app/src/**/!(*.test).js'
    './app/tmp/**/*.js'
];

gulp.task('index', function () {
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('./build'))
});

gulp.task('css', function () {
    return gulp.src('./app/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('scripts', function () {
    return gulp.src(scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('scripts:prod', function () {
    return gulp.src(scripts)
        .pipe(concat('app.js'))
		.pipe(uglify())		
        .pipe(gulp.dest('./build'));
});

gulp.task('templates', function () {
    return gulp.src('./app/src/**/*.html')
        .pipe(templateCache({
            module: 'app'
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('./build'));
});


gulp.task('tsc', function(){
    return gulp.src('./app/src/**/*.ts')
        .pipe(ts('app/tsconfig.json'))
        .pipe(gulp.dest('./app/tmp/'))
});

gulp.task('tsc:prod', function(){
	return gulp.src('./app/src/**/*.ts')
		.pipe(typescript({target:'ES5'}))
		.pipe(gulp.dest('./tmp/'))
		.pipe(concat('app.js'))
		.pipe(uglify())
        .pipe(gulp.dest('./build'));
});

gulp.task('dev', ['tsc', 'index', 'css', 'templates']);
gulp.task('release', ['tsc', 'scripts:prod', 'index']);

gulp.task('watch', ['dev', 'scripts'], function () {
    gulp.watch('./app/src/**', ['dev']);
    gulp.watch('./app/tmp/**', ['scripts']);
});

gulp.task('default', ['dev', 'scripts'], function () {
    gulp.watch('./app/src/**', ['dev']);
    gulp.watch('./app/tmp/**', ['scripts']);
});