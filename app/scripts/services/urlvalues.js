'use strict';

angular.module('projetinhoFrontApp')
    .factory('UrlValues', function(){
        var baseApiUrl = 'http://localhost/timeline_api/index.php/';
        return {
            postuser: baseApiUrl + 'user',
            getuserbyid: baseApiUrl + 'user/:id',
            getusers: baseApiUrl + 'users',
            login: baseApiUrl + 'login'
        }
    });
