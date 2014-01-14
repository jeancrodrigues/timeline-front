'use strict';

angular.module('projetinhoFrontApp')
  .factory('Login', function ($resource) {
    return $resource('http://api.timeline/login',{},{
        login: {method: 'POST'}
    });
  });
