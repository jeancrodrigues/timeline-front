'use strict';

angular.module('projetinhoFrontApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.config(function ($routeProvider,$httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/user', {
            templateUrl: 'views/user.html',
            controller: 'UserCtrl'
        })
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .when('/registrar', {
          templateUrl: 'views/registrar.html',
          controller: 'RegistrarCtrl'
        })
        .otherwise({
            redirectTo: '/login'
        });

    $httpProvider.defaults.headers.post  = {'Content-Type': 'application/x-www-form-urlencoded'};
    $httpProvider.defaults.headers.put  = {'Content-Type': 'application/x-www-form-urlencoded'};
});
