'use strict';

angular.module('projetinhoFrontApp')
    .controller('PostsCtrl', function ($scope,PostsSvc) {
        PostsSvc.getpostsrecentes(function(data){
            $scope.posts = data;
        });
    });
