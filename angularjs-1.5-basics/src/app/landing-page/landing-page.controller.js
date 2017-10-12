'use strict';

var landingPageController = function ($interval, $log, $sce) {
    var vm = this;
    vm.allComponents = [
        {
            name: 'interval-example',
            html: $sce.trustAsHtml('<interval-example></interval-example>'),
            test: $sce.trustAsHtml('<h1>Test</h1>')
        },
        {
            name: 'timeout-example',
            html: $sce.trustAsHtml('<interval-example></interval-example>'),
            test: $sce.trustAsHtml('<h1>Test</h1>')
        }

    ];

    vm.searchText = '';
    vm.test = '';
    vm.selectedComponent = '';
    vm.filteredComponents = [];

    vm.filterComponentList = function () {
        $log.debug('filtering for new Search Text : ' + vm.selectedComponent);

        if (!vm.selectedComponent) {
            vm.filteredComponents = _.slice(vm.allComponents, 0, vm.allComponents.length);
        } else {
            vm.filteredComponents = _.filter(vm.allComponents, function (component) {
                return component.name === vm.selectedComponent;
            });
        }
    };

    /* vm.getComponents = function () {
         return _
             .chain(vm.allComponents)
             .map(function (component) {
                 return component.name;
             })
             .value();
     };*/

    var init = function () {
        vm.filterComponentList();
    };

    init();
};


angular.module('landing-page').controller('LandingPageController', landingPageController);


