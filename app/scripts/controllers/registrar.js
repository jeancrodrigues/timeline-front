'use strict';

angular.module('projetinhoFrontApp')
	.controller('RegistrarCtrl', function ($scope,$resource,UrlValues,UserSvc) {
		$scope.registrar = function(usuario){				
			UserSvc.gravarUser(usuario,function(retorno){
				console.log(retorno);
                location
			});
		};

        $scope.getformclass = function(form){
            if(form|form!==undefined){
                if(form.$dirty){
                    for(var prop in form.$error){
                        if(typeof form.$error[prop] === 'boolean' && form.$error[prop]){
                            console.log(form.$error);
                            return 'has-error';
                        }
                    }
                    return 'has-success';
                }
            }
            return '';
        }

	});
