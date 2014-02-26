'use strict';

angular.module('projetinhoFrontApp').controller(
    'UserCtrl', function ($scope,$routeParams,$location,UserSvc,PostsSvc) {

        var nomeusuario = $routeParams.nomeusuario;
        var usuariologado = UserSvc.getUser();
        var user;

        if(nomeusuario|nomeusuario !== undefined){
            if(usuariologado && usuariologado !== undefined && usuariologado.nomeusuario === nomeusuario){
                user = usuariologado;
                atualizarusuario(user);
            }else{
                UserSvc.getUserByName(nomeusuario,function(data){
                    if(data.iduser !== undefined){
                        atualizarusuario(data);
                    }else{
                        console.log('Usuario não encontrado: ' + nomeusuario);
                        $location.path('/');
                    }
                });
            }
        }else{
            if(usuariologado|usuariologado !== undefined){
                user = usuariologado;
                atualizarusuario(user);
            }else{
                $location.path('/');
            }
        }

        function atualizarposts(seq){
            if($scope.user|$scope.user !== undefined){
                PostsSvc.getpostsfromuser(function(data){
                    $scope.posts = data;
                }, $scope.user.iduser, seq );
            }
        }

        function atualizarusuario(usuario){
            $scope.user = usuario;
            $scope.usuariologado = usuario === usuariologado;
            $scope.postscontainerclass = $scope.usuariologado ? 'col-md-9' : 'col-md-8 col-md-offset-2';
            atualizarposts(0);
        }

        $scope.postar = function(post){
            PostsSvc.gravarpost(post.titulo,post.texto,function(data){
                console.log(data);
                if(data.mensagem = 'ok'){
                    $scope.novopost = {};
                    atualizarposts(0);
                }
            });
        }
    }
);
