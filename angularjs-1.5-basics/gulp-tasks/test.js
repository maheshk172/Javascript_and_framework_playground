'use strict';

var gulp = require('gulp');
var karma = require('karma');
var path = require('path');
var _ = require('lodash');
var fileconfig = require('../config/file.config.js');
var open = require('gulp-open');

var karmaDefaults = {
    configFile: path.join(__dirname, '../config/karma.config.js'),
    logLevel: 'INFO',
    singleRun: true,
    autoWatch: false
};

gulp.task('test-release', ['build'], function(cb) {
    var karmaConfig = _.defaults({
        browsers: ['Chrome','Firefox','IE'],
        files: _.concat(fileconfig.vendor_js, fileconfig.test_release_js, fileconfig.test_templates)
    }, karmaDefaults);
    var server = new karma.Server(karmaConfig, cb);
    server.start();
});

gulp.task('test-ci', ['analyze', 'analyze-ci'], function(cb) {
    var karmaConfig = _.defaults({
        singleRun: false,
        autoWatch: true
    }, karmaDefaults);
    var server = new karma.Server(karmaConfig, cb);
    server.start();
    gulp.src('./reports/coverage/html/index.html')
        .pipe(open());
});

gulp.task('test-jenkins', ['build'], function(cb) {
    var karmaConfig = _.defaults({
        browsers: ['Firefox']
    }, karmaDefaults);
    var server = new karma.Server(karmaConfig, cb);
    server.start();
});

gulp.task('test-debug', ['analyze', 'analyze-ci'], function(cb) {
    var karmaConfig = _.defaults({
        singleRun: false,
        autoWatch: true,
        preprocessors: {
            'src/app/**/*.html': 'ng-html2js'
        }
    }, karmaDefaults);
    var server = new karma.Server(karmaConfig, cb);
    server.start();
});
