'use strict';

var projetinhoFrontApp = angular.module('projetinhoFrontApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

projetinhoFrontApp.config(function ($routeProvider) {
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
        .when('/register', {
          templateUrl: 'views/register.html',
          controller: 'RegisterCtrl'
        })
        .otherwise({
            redirectTo: '/login'
        });
});
