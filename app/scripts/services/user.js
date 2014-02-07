'use strict';

angular.module('projetinhoFrontApp')
    .factory('UserSvc', function ($resource,$cookieStore, $rootScope, UrlValues) {
        var usuario = {}, callbacks = [];

        var UserResource = $resource(UrlValues.postuser,{},{
            salvar:{
                method: 'POST',
                params: {
                    nome: '', datanascimento: '' ,
                    sexo: '' , nomeusuario: '',
                    email: '' , senha: ''
                },
                headers:{ 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        });

        function updateCallbacks(){
            angular.forEach(callbacks,function(callback){
                callback();
            })
        }

        function verificarUsuario(){
            usuario = $cookieStore.get('usuariologado');
            return !(typeof usuario === 'undefined' || typeof usuario === 'null' );
        }

        verificarUsuario();

        return {
            setUser: function(user){
                usuario = user;
                $cookieStore.put('usuariologado', user);
                updateCallbacks();
            },
            getUser: function(){
                return usuario;
            },
            unsetUser: function(){
                usuario = null;
                $cookieStore.remove('usuariologado');
                console.log('UserSvc: unsetUser');
                updateCallbacks();
            },
            gravarUser: function(user,fnSucess,fnError){
                var param = $.param({
                    nome: user.nome,
                    nomeusuario: user.username,
                    datanascimento: user.datanascimento ,
                    sexo: user.sexo ,
                    email: user.email ,
                    senha: user.senha
                });
                UserResource.salvar(param,fnSucess,fnError);
            },
            verificarUsuario: verificarUsuario,
            registrarCallback: function(callback){
                callbacks.push(callback);
                callback();
            }
        }
    });
