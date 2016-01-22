var app = angular.module('routeApp', ['ngRoute']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/red', {
            templateUrl:'views/red.html',
            controller: 'RedController'
        })
        .when('/blue', {
            templateUrl:'views/blue.html',
            controller: 'BlueController'
        })
        .when('/orange', {
            templateUrl:'views/orange.html',
            controller: 'OrangeController'
        });

    $locationProvider.html5Mode(true);

}]);

app.controller('RedController', ['$scope', function($scope){

}]);

app.controller('BlueController', ['$scope', function($scope){

}]);


app.controller('OrangeController', ['$scope', function($scope){


}]);



