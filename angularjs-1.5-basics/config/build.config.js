/**
 * Build process configuration file/module
 * */

var package_json = require('../package.json');
var fileconfig = require('./file.config.js');

module.exports = {
    bundle: package_json.name,
    module: package_json.main,
    demo: {
        index_template: 'src/index.tpl.html',
        index_target: 'index.html',
        index_template_js: 'src/index.js',
        config_template: 'src/config/*.*',
        config_target: '/config',
        package_path: 'package.json',
        dir: 'demo',
        files: {
            vendor_js: fileconfig.vendor_js,
            app_js: fileconfig.app_js_demo,
            mock_app_js: fileconfig.mock_app_js,
            css: fileconfig.css_demo,
            ignore_paths: fileconfig.ignore_paths_demo
        },
        sources:{
            js: ['src/app/**/*.js', '!src/app/**/*.mock.js', '!src/app/**/*.spec.js'],
            tpl: ['src/app/**/*.tpl.html'],
            scss: ['src/assets/scss/**/*.scss'],
            scss_include_paths: [
                'node_modules/motion-ui/src'
            ],
            assets: ['src/**/assets/**/*.{jpg,svg,png,gif,woff,woff2,eot,ttf,otf}'],
            watch_scss_files: ['src/assets/scss/**/*.scss']
        }
    },
    dist: {
        index_template: 'src/index.tpl.html',
        index_target: 'index.html',
        index_template_js: 'src/index.js',
        config_template: 'src/config/*.*',
        config_target: '/config',
        procfile_path: 'Procfile',
        package_path: 'package.json',
        dir: 'dist',
        mocks_dir: 'dist/mocks',
        files: {
            vendor_js: fileconfig.vendor_js,
            app_js: fileconfig.app_js_dist,
            css: fileconfig.css_dist,
            ignore_paths: fileconfig.ignore_paths_dist
        },
        sources:{
            js: ['src/app/**/*.js', '!src/app/**/*.mock.js', '!src/app/**/*.spec.js', '!src/app/**/*.tpl.js'],
            tpl: ['src/app/**/*.tpl.html'],
            scss: ['src/assets/scss/**/*.scss'],
            scss_include_paths: [
                'node_modules/motion-ui/src'
            ],
            assets: ['src/**/assets/**/*.{jpg,svg,png,gif,woff,woff2,eot,ttf,otf}'],
            mocks: ['src/app/**/*.mock.js']
        }
    }
};
