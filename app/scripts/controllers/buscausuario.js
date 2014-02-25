'use strict';

angular.module('projetinhoFrontApp')
  .controller('BuscausuarioCtrl', function ($scope,UserSvc) {

        $scope.buscarUsuarios = function(nome){
            console.log(nome);
            if(nome !== undefined && nome.length > 2){
                return UserSvc.buscarUsuarios(nome);
            }else{
                return [];
            }
        };
  });
