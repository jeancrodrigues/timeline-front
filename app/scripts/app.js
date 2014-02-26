'use strict';

angular.module('projetinhoFrontApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'infinite-scroll'
])
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/posts.html',
            controller: 'PostsCtrl'
        })
        .when('/user', {
            templateUrl: 'views/user.html',
            controller: 'UserCtrl'
        })
        .when('/user/:nomeusuario', {
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
            redirectTo: '/'
        });
});