'use strict';

angular.module('projetinhoFrontApp')
    .factory('UrlValues', function(){
        var baseApiUrl = 'http://localhost/timeline_api/index.php/';
        return {
            postuser: baseApiUrl + 'user',
            getuserbyid: baseApiUrl + 'user/:id',
            getuserslist: baseApiUrl + 'users/',
            getusers: baseApiUrl + 'users/:nome',
            login: baseApiUrl + 'login',
            postsbyiduser: baseApiUrl + 'user/:userid/posts/:seq',
            postsrecentes: baseApiUrl + 'posts/:seq',
            gravarpost: baseApiUrl + 'post/'
        }
    });
