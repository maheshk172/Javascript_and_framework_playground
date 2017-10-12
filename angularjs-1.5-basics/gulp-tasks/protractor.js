'use strict';

var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;

// Setting up the test task
gulp.task('protractor', [], function(cb) {
    gulp.src(['test/features/features_ui/*.feature']).pipe(protractor({
        configFile: 'config/protractor.conf.js',
        args: ['--baseUrl', 'http://127.0.0.1:9000']
    })).on('error', function(e) {
        //console.log('Errrrro',e)
        process.exit(1);
    }).on('end', function() {
        process.exit();
        cb();
    });
});
