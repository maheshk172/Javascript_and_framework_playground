/**
 * Build process configuration file/module
 * */

module.exports = {
    vendor_js: [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-resource/angular-resource.js',
        'node_modules/angular-animate/angular-animate.js',
        'node_modules/angular-messages/angular-messages.js',
        'node_modules/lodash/lodash.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js'
    ],
    app_js_demo: [
        'src/app/**/*.js',
        '!src/app/**/*.mock.js',
        '!src/app/**/*.spec.js'
    ],
    app_js_dist: [
        'dist/*.js',
        '!dist/*.min.js'
    ],
    mock_app_js: [
        'src/app/**/*.js',
        'src/app/**/*.mock.js',
        '!src/app/**/*.spec.js'
    ],
    css_demo: [
        'node_modules/angular/angular-csp.css',
        'demo/*.css'
    ],
    css_dist: [
        'node_modules/angular/angular-csp.css',
        'dist/*.css',
        '!dist/*.min.css'
    ],
    test_js: [
        // mocks
        'node_modules/angular-mocks/angular-mocks.js',
        // sources
        'src/app/**/*.js',
        // specs
        'src/app/**/*.spec.js'
    ],
    test_templates: [
        // templates
        'src/app/**/*.tpl.html'
    ],
    test_release_js: [
        // mocks
        'node_modules/angular-mocks/angular-mocks.js',
        // dist
        'dist/*.js',
        // specs
        'src/**/*.spec.js'
    ],
    ignore_paths_demo: ['demo', 'src/app', 'node_modules'],
    ignore_paths_dist: ['dist', 'node_modules']
};
