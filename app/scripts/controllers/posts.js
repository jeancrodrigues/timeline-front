'use strict';

angular.module('projetinhoFrontApp')
    .controller('PostsCtrl', function ($scope,PostsSvc) {
        PostsSvc.getposts(function(data){
            $scope.posts = data;
        });
    });
