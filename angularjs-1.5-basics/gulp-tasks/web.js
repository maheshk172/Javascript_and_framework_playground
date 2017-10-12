'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;

var demo_dirs = ['src/app', 'demo', 'node_modules'];
var dist_dirs = ['dist', 'node_modules'];
var livereload_port = argv.lp || 35728; // Default is 35729 but we keep it as default port for main app
var server_port = argv.p || 9000;

var startServer = function (src) {
    gulp.src(src)
        .pipe($.webserver({
            port: server_port,
            livereload: {
                enable: true,
                port: livereload_port
            },
            proxies: [
                {
                    // This is common address for dev dbf services. Same as country variants you get by replacing com.
                    source: '/api/', target: 'http://digital.com.nd.dev01.qaoneadr.local/api/'
                }
            ]
        }));
};

gulp.task('webserver', function () {
    return startServer(dist_dirs);
});

gulp.task('webserver-demo', function () {
    return startServer(demo_dirs);
});

