'use strict';

angular.module('projetinhoFrontApp').controller(
    'UserCtrl', function ($scope,UserSvc,PostsSvc) {

        var user = UserSvc.getUser();
        $scope.user = user;


        $scope.novopost = {};

        function atualizarposts(seq){
            PostsSvc.getpostsfromuser(function(data){
                $scope.posts = data;
            },user.iduser, seq );
        }

        $scope.postar = function(post){
            PostsSvc.gravarpost(post.titulo,post.texto,function(data){
                console.log(data);
                if(data.mensagem='ok'){
                    $scope.novopost = {};
                    atualizarposts(0);
                }
            });
        }

        atualizarposts(0);
    }
);
