'use strict';

angular.module('angular-1.5-basics-main')
    .constant('MAIN-STATE', 'landingPage')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('/', {
                url: '/',
                redirectTo: 'landingPage',
                template: '<ui-view/>'
            })
            //Marketing Landing Page
            .state('landingPage', {
                url: '/landingPage',
                template: '<landing-page></landing-page>'
            })
            .state('bindingPage', {
                url: '/bindingPage',
                template: '<parent-component></parent-component>'
            });

        $urlRouterProvider.otherwise('/landingPage');
    })
    .run(function ($rootScope, $log, $state) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState /*,fromParams, options*/) {

                if (toState.redirectTo) {
                    event.preventDefault();
                    $state.go(toState.redirectTo, toParams, {location: 'replace'});
                }

                $log.log('toState : ' + JSON.stringify(toState));
                $log.log('fromState : ' + JSON.stringify(fromState));
            });
    });
