'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');

requireDir('gulp-tasks');

gulp.task('run-prod', function(cb) {
    runSequence(
        'build-prod',
        cb
    );
});

gulp.task('run', function(cb) {
    runSequence(
        'build',
        'watch',
        'webserver',
        cb
    );
});

gulp.task('run-demo', function(cb) {
    runSequence(
        'build-demo',
        'watch-demo',
        'webserver-demo',
        cb
    );
});

gulp.task('run-demo-mocked', function(cb) {
    runSequence(
        'build-demo-mocked',
        'watch-demo-mocked',
        'webserver-demo',
        cb
    );
});

// Shortcuts

gulp.task('clean', ['clean-dist','clean-demo']);

gulp.task('release', ['release-patch']);
