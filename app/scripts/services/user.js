'use strict';

angular.module('projetinhoFrontApp')
    .factory('UserSvc', function ($resource,$http,$cookieStore, $rootScope, UrlValues) {
        var usuario = undefined, callbacks = [];

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

        var BuscarUsuarioResource = $resource(UrlValues.getuserbyname,
            { nome: '@nome'},{
            buscar: {
                method: 'GET',
                isArray: false
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
                usuario = undefined;
                $cookieStore.remove('usuariologado');
                updateCallbacks();
            },
            getUserByName: function(nome,fn){
                BuscarUsuarioResource.buscar({nome:nome},fn);
            },
            gravarUser: function(user,fnSucess,fnError){
                var param = $.param({
                    nome: user.nome,
                    nomeusuario: user.nomeusuario,
                    datanascimento: user.datanascimento ,
                    sexo: user.sexo ,
                    email: user.email ,
                    senha: user.senha0
                });
                UserResource.salvar(param,fnSucess,fnError);
            },
            verificarUsuario: verificarUsuario,
            registrarCallback: function(callback){
                callbacks.push(callback);
                callback();
            },
            buscarUsuarios : function(nome){
                return $http.get(UrlValues.getuserslist + nome, {}).then(function(res){
                    return res.data;
                });
            }
        }
    });
