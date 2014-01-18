'use strict';

angular.module('projetinhoFrontApp')
    .factory('UrlValues', function(){
        var baseApiUrl = 'http://api.timeline/';
        return {
            postuser: baseApiUrl + 'user',
            getuserbyid: baseApiUrl + 'user/:id',
            getusers: baseApiUrl + 'users',
            login: baseApiUrl + 'login'
        }
    });
