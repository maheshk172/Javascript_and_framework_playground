/**
 * Created by Mahesh on 11-08-2014.
 */
(function () {

    var module = angular.module("JSBestPracticesModule", []);

    var angularjsTestController = function($scope, $http, $log) {

        var sayHello = function () {

        };
        console.log("The Controlller called ");
        $scope.message = "Recieved this from angular Controller";

       /* return {
            sayHello: sayHello
        };*/

    };


    var loginController = function ($scope, $http, $log) {

        $scope.authenticateUser = function() {
            console.log("authenticate User called");

            // make server side call to test user Authentication
            alert("Authentication called");

        };

     /*   return {
            authenticateUser: authenticateUser

        };*/
    };


    module.controller("angularJsTestController", ["$scope", "$http", "$log", angularjsTestController]);
    module.controller("loginController", ["$scope", "$http", "$log", loginController]);
}());