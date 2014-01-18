'use strict';

angular.module('projetinhoFrontApp')
    .controller('LoginCtrl', function ($scope,$rootScope,$location,LoginSvc,UserSvc) {

        $scope.userForm = {username:null,pass:null};

        $scope.logar = function(user){
            // chama o metodo do service LoginSvc
            LoginSvc.logar(
                user.username,
                user.pass,
                function (retorno){ // funcao executada quando a requisicao for efetuada
                    if( typeof retorno.token === 'undefined' || typeof retorno.token === 'null' ){
                        $scope.mensagem = retorno.mensagem;
                    }else{
                        UserSvc.setUser(retorno);
                        $rootScope.usuariologado = retorno;
                        $location.path('user');
                    }
                },
                function(){
                    $scope.mensagem = "Erro na requisição";
                }
            );
        }
    });