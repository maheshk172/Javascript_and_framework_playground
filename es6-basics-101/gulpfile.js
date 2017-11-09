var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var watch = require('gulp-watch');

gulp.task('jasmine', function () {

    var filesForTest = ['src/07_modules/**/*.js', 'src/07_modules/*.spec.js'];
    //var filesForTest = ['src/06_objects/**/*.js', 'src/06_objects/*.spec.js'];
    //var filesForTest = ['src/05_async_development/**/*.js', 'src/05_async_development/*.spec.js'];
    //var filesForTest = ['src/04_built_in_objects/*.spec.js'];
    //var filesForTest = ['src/03_functional_Javascript/*.spec.js'];
    //var filesForTest = ['src/02_classes/*.spec.js'];
    //var filesForTest = ['src/**/*.js', 'spec/**/*.spec.js'];

    return gulp.src(filesForTest)
        .pipe(watch(filesForTest))
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({port: 8888}));
});

/*
gulp.task('jasmine-chrome', function() {
    var filesForTest = ['src/!**!/!*.js', 'spec/!**!/!*_spec.js'];
    return gulp.src(filesForTest)
        .pipe(watch(filesForTest))
        .pipe(jasmineBrowser.specRunner({console: true}))
        .pipe(jasmineBrowser.headless({driver: 'chrome'}));
});

gulp.task('jasmine-phantom', function() {
    return gulp.src(['src/!**!/!*.js', 'spec/!**!/!*_spec.js'])
        .pipe(jasmineBrowser.specRunner({console: true}))
        .pipe(jasmineBrowser.headless({driver: 'phantomjs'}));
});*/
