'use strict';

angular.module('projetinhoFrontApp')
  .controller('BuscausuarioCtrl', function($scope,$location,UserSvc){
        $scope.usuarioSelecionado = "";

        $scope.buscarUsuarios = function(nome){
            return UserSvc.buscarUsuarios(nome);
        };

        $scope.selecionarUsuario = function($item, $model, $label){
            console.log($item);
            $scope.usuarioSelecionado = "";
            $location.path('/user/' + $item.nomeusuario);
        };

  });
