'use strict';

angular.module('projetinhoFrontApp')
    .controller('LogoutCtrl', function($location,$rootScope, LoginSvc) {
        LoginSvc.deslogar();
        $rootScope.usuariologado = null;
        $location.path('login');
    });
