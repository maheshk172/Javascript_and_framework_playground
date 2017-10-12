var fileconfig = require('./file.config.js');
var _ = require('lodash');

module.exports = function(karma) {
    karma.set({
        frameworks: ['jasmine', 'angular-filesort'],
        browsers: ['Chrome'],
        basePath: '../',
        files: _.concat(fileconfig.vendor_js, fileconfig.test_js, fileconfig.test_templates),

        exclude:['src/app/**/*.mock.js'],

        angularFilesort: {
            whitelist: [
                'src/app/**/*.js'
            ]
        },

        /**
         * On which port should the browser connect, on which port is the test runner
         * operating, and what is the URL path for the browser to use.
         */
        port: 9018,
        runnerPort: 9100,
        urlRoot: '/',
        reporters: ['dots', 'progress', 'coverage'],

        preprocessors: {

            // uncomment this to enable ES6 transpilation
            // es6 transpilation for all src files
            //'src/app/**/*.js': ['babel'],

            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            'src/app/**/!(*.spec|*.mock).js': ['coverage'],
            'src/app/**/*.html': 'ng-html2js'
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/app/',
            // setting this option will create
            // only a single module that contains templates
            // from all the files, so you can load them all
            // with module('templates')
            moduleName: 'templates'
        },

        coverageReporter: {
            dir: 'reports/coverage',
            reporters: [
                {type: 'cobertura', subdir: 'cobertura'},
                {type: 'html', subdir: 'html'},
                {type: 'lcov', subdir: 'lcov'}
            ]
        }

    });
};