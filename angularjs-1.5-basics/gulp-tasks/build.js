'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var series = require('stream-series');
var runSequence = require('run-sequence');
var angularTemplateCache = require('gulp-angular-templatecache');
var mergeStream = require('merge-stream');
var plumber = require('gulp-plumber');
var build_config = require('../config/build.config.js');
var styleReporter = require('postcss-reporter');
var syntaxScss = require('postcss-scss');
var stylelint = require('stylelint');

gulp.task('build', function(done) {
    runSequence(
        'install',
        'analyze',
        'clean-dist',
        ['build-js', 'build-mocks', 'build-sass', 'copy-assets'],
        'index',
        done
    );
});

gulp.task('build-prod', function(done) {
    runSequence(
        'install',
        'analyze',
        'clean-dist',
        ['build-js', 'build-mocks', 'build-sass', 'copy-assets'],
        'index-prod',
        done
    );
});

gulp.task('build-demo', function(done) {
    runSequence(
        'install',
        'analyze-ci',
        'clean-demo',
        'build-sass-demo',
        'copy-assets-demo',
        'index-demo',
        done
    );
});

gulp.task('build-demo-mocked', function(done) {
    runSequence(
        'install',
        'analyze-ci',
        'clean-demo',
        'build-sass-demo',
        'copy-assets-demo',
        'index-demo-mocked',
        done
    );
});

gulp.task('build-ci', function(done) {
    runSequence(
        'install',
        'analyze',
        'clean-dist',
        ['build-js', 'build-mocks', 'build-sass', 'copy-assets'],
        'index',
        'watch',
        done
    );
});

gulp.task('watch-demo', function(done) {
    runSequence(
        'watch-sass-demo',
        'watch-index-demo',
        done
    );
});

gulp.task('watch-demo-mocked', function(done) {
    runSequence(
        'watch-sass-demo',
        'watch-index-demo-mocked',
        done
    );
});

gulp.task('watch', function(cb) {
    gulp.watch([build_config.dist.sources.js, build_config.dist.sources.tpl], ['build-js', 'eslint']);
    gulp.watch([build_config.dist.sources.mocks], ['build-mocks']);
    gulp.watch([build_config.dist.sources.scss], ['build-sass']);
    gulp.watch([build_config.dist.sources.assets], ['copy-assets']);
    cb();
});

gulp.task('clean-dist', function() {
    return gulp.src(build_config.dist.dir, { read: false })
        .pipe($.clean());
});

gulp.task('build-js', function() {
    var sources = gulp.src(build_config.dist.sources.js)

        // uncomment this to enable ES6 transpilation
        //.pipe($.babel())

        .pipe($.angularFilesort())
        .pipe($.ngAnnotate({ single_quotes: true }));
    var templates = gulp.src(build_config.dist.sources.tpl)
        .pipe($.htmlmin({
            removeComments: true,
            collapseWhitespace: true
        }))
        .pipe(angularTemplateCache({
            filename: build_config.bundle + '.tpl.js',
            module: build_config.module + '.tpl',
            standalone: true
        }))
        .pipe($.wrap('\'use strict\';\n\n<%= contents %>\n\n'));
    return mergeStream(templates, sources)
        .pipe($.wrap('(function(){\n<%= contents %>\n})();'))
        .pipe($.concat(build_config.bundle + '.js'))
        .pipe(gulp.dest(build_config.dist.dir));
});

gulp.task('build-mocks', function() {
    gulp.src(build_config.dist.sources.mocks)
        .pipe($.angularFilesort())
        .pipe($.ngAnnotate({ single_quotes: true }))
        .pipe($.wrap('(function(){\n<%= contents %>\n})();'))
        .pipe($.concat(build_config.bundle + '.mock.js'))
        .pipe(gulp.dest(build_config.dist.mocks_dir));
});

gulp.task('build-sass', ['lint-styles'], function() {
    return gulp.src(build_config.dist.sources.scss)
        .pipe($.sass({includePaths: build_config.dist.sources.scss_include_paths}).on('error', $.sass.logError))
        .pipe($.rename({ basename: build_config.bundle }))
        .pipe($.autoprefixer({
            browsers: ['last 2 versions', 'ie >= 10', 'and_chr >= 4.4'] // Foundation flexbox requires ie 10 and android chrome >= 4.4
        }))
        .pipe(gulp.dest(build_config.dist.dir));
});

gulp.task('build-sass-demo', ['lint-styles'], function() {
    return gulp.src(build_config.demo.sources.scss)
        .pipe($.sass({includePaths: build_config.demo.sources.scss_include_paths}).on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 2 versions', 'ie >= 10', 'and_chr >= 4.4'] // Foundation flexbox requires ie 10 and android chrome >= 4.4
        }))
        .pipe(gulp.dest(build_config.demo.dir));
});

gulp.task('copy-assets-demo', function() {
    return gulp.src(build_config.demo.sources.assets)
        .pipe($.copy(build_config.demo.dir, { 'prefix': 1 }));
});

gulp.task('copy-assets', function() {
    return gulp.src(build_config.dist.sources.assets)
        .pipe($.copy(build_config.dist.dir, { 'prefix': 1 }));
});

gulp.task('clean-demo', function() {
    return gulp.src(build_config.demo.dir, { read: false })
        .pipe($.clean());
});

var index = function(app, config, app_files, isProd) {
    var target = gulp.src(config.index_template);
    var targetJs = gulp.src(config.index_template_js);
    var targetConfig = gulp.src(config.config_template);
    var packageJSON = gulp.src(config.package_path);

    if(config.procfile_path) {
        var procfilePath = gulp.src(config.procfile_path);
        procfilePath.pipe(gulp.dest(config.dir));
    }

    var vendorStream = gulp.src(config.files.vendor_js, {read: false});
    var appStream = gulp.src(app_files).pipe(plumber()).pipe($.angularFilesort());
    var cssStream = gulp.src(config.files.css);

    targetJs.pipe(gulp.dest(config.dir));
    targetConfig.pipe(gulp.dest(config.dir + config.config_target));
    packageJSON.pipe(gulp.dest(config.dir));

    if(isProd !== true){
        return target.pipe($.inject(series(vendorStream, appStream, cssStream), {ignorePath: config.files.ignore_paths, addRootSlash: false}))
            .pipe($.template({app_module: app}))
            .pipe($.rename(config.index_target))
            .pipe(gulp.dest(config.dir));
    } else {
        return target.pipe($.inject(series(vendorStream, appStream, cssStream), {ignorePath: config.files.ignore_paths, addRootSlash: false}))
            .pipe($.template({app_module: app}))
            .pipe($.rename(config.index_target))
            .pipe(gulp.dest(config.dir));
    }


};

gulp.task('index', function() {
    return index(build_config.module, build_config.dist, build_config.dist.files.app_js);
});

gulp.task('index-prod', function() {
    //Overriding ignore paths, so that I can test with node-modules
    build_config.dist.files.ignore_paths = ['dist'];
    return index(build_config.module, build_config.dist, build_config.dist.files.app_js, true);
});


gulp.task('index-demo', function() {
    return index(build_config.module, build_config.demo, build_config.demo.files.app_js);
});

gulp.task('index-demo-mocked', function() {
    return index(build_config.module + '.mocks', build_config.demo, build_config.demo.files.mock_app_js);
});

gulp.task('watch-sass-demo', function() {
    return gulp.watch(build_config.demo.sources.watch_scss_files, ['build-sass-demo']);
});

gulp.task('watch-index-demo', function() {
    return gulp.watch([
        build_config.demo.sources.js,
        build_config.demo.index_template
    ], ['index-demo']);
});

gulp.task('watch-index-demo-mocked', function() {
    return gulp.watch([
        build_config.demo.sources.js,
        build_config.demo.index_template
    ], ['index-demo-mocked']);
});

gulp.task('lint-styles', function() {
    return gulp.src(build_config.demo.sources.watch_scss_files)
        .pipe($.postcss([
            stylelint(),
            styleReporter({ clearMessages: true })
        ], { syntax: syntaxScss }));
});
