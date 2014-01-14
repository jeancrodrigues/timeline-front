'use strict';

angular.module('projetinhoFrontApp').controller(
    'UserCtrl', function ($scope,User) {

        $scope.user = {};

        $scope.retrieveUser = function(){
            $scope.ret =  User.query({id: $scope.searchid });
        }

        $scope.saveUser = function(){
            $scope.ret = User.save($scope.user);
        }
    }
);
