'use strict';

angular.module('projetinhoFrontApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.config(function ($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/', {
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
        .when('/logout', {
          templateUrl: 'views/logout.html',
          controller: 'LogoutCtrl'
        })
        .otherwise({
            redirectTo: '/login'
        });
});