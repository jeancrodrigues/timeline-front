'use strict';

angular.module('projetinhoFrontApp').controller(
    'HeaderCtrl', function ($scope,$rootScope,$location, UserSvc){
        UserSvc.registrarCallback(function(){
            $scope.user = UserSvc.getUser();
        });

        UserSvc.verificarUsuario();

        $scope.deslogar = function(){
            $location.path('logout');
        }
    }
);

