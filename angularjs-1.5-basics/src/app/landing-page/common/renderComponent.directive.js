'use strict';


var renderComponent = function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controllers) {
            return element.append(attrs.component);
        }
    };

};

angular.module('landing-page')
    .directive('renderComponent', renderComponent);

