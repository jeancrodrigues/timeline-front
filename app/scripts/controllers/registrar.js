'use strict';

angular.module('projetinhoFrontApp')
	.controller('RegistrarCtrl', function ($scope,$resource,UrlValues,UserSvc) {
		
		$scope.novoUsuario = {
			nome:'',
			nomeusuario:'',
			email:'',
			datanascimento:'',
			sexo:'',
			senha0:'',
			senha1:''			
		};
		
		$scope.registrar = function(usuario){				
			UserSvc.gravarUser(usuario,function(retorno){
				console.log(retorno);
			},function(){
				
			})	;		
		};
	});
