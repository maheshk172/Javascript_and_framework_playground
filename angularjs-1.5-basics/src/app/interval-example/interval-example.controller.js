'use strict';

var intervalExampleController = function ($interval, $log) {
    var intervalPromise;
    var vm = this;


    vm.count = 0;
    vm.startIncrementTimer = function (timeInMinutes) {
        intervalPromise = $interval(function () {
            $log.debug('incremented count by 1, current count is - ' + vm.count);
            vm.count += 1;
        }, 1000, timeInMinutes * 60 * 1000);
    };

    vm.stopIncrementTimer = function () {
        vm.count = 0;
        $interval.cancel(intervalPromise);
        $log.debug('reset counter to 0, current count is' + vm.count);
    };

};


angular.module('interval-example').controller('IntervalExampleController', intervalExampleController);
