'use strict';

var convertToHtml = function ($sce) {
    return function (input) {
        return $sce.trustAsHtml(input);
    };
};

angular.module('landing-page')
    .filter('convertToHtml', convertToHtml);

