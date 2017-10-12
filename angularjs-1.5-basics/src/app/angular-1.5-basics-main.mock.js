/*eslint-env jasmine */
/*global module:false, inject:false */
'use strict';

angular.module('angular-1.5-basics-main.mocks', ['angular-1.5-basics-main','ngMockE2E']).config(function () {
    angular.MOCKDATA = {auth: true};
}).run(function ($httpBackend) {
    $httpBackend.whenGET(/^.*.tpl.html/).passThrough();
});

