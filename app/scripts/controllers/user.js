'use strict';

angular.module('projetinhoFrontApp').controller(
    'UserCtrl', function ($scope,UserSvc) {
        $scope.user = UserSvc.getUser();
    }
);
