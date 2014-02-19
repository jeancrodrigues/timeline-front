'use strict';

angular.module('projetinhoFrontApp').controller(
    'UserCtrl', function ($scope,UserSvc,PostsSvc) {

        var user = UserSvc.getUser()

        $scope.user = user;
        $scope.novopost = {};

        function atualizarposts(seq){
            PostsSvc.getpostsfromuser(function(data){
                $scope.posts = data;
            },user.iduser, seq );
        }

        $scope.postar = function(post){
            post.nomeusuario = $scope.nomeusuario;
            post.datapublicacao = new Date();
            $scope.posts.push(post);
            $scope.novopost = {};
            atualizarposts(0);
        }

        atualizarposts(0);
    }
);
