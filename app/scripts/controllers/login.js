'use strict';

angular.module('projetinhoFrontApp')
    .controller('LoginCtrl', function ($scope,Login) {
        $scope.logar = function(user){
            $scope.retornoLogin = Login.login($.param({username: user.username , pass: user.pass}));
        }
    });
