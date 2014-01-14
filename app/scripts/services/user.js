'use strict';

angular.module('projetinhoFrontApp').factory('User', function ($resource) {
    return $resource('http://api.timeline/user/:id', {}, {
        query: { method:'GET', params:{id:''}},
        save: { method:'POST' , params:{ nome: '' , username:'' , email: '' , pass1: '' , pass2: '' }}
    //        update: {method:'PUT'},
    //        remove: {method:'DELETE'}
    });
});
