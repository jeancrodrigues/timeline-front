'use strict';

angular.module('projetinhoFrontApp')
    .factory('UrlValues', function(){
        var baseApiUrl = 'http://localhost/timeline_api/index.php/';
        return {
            postuser: baseApiUrl + 'user',
            getuserbyid: baseApiUrl + 'user/:id',
            getuserslist: baseApiUrl + 'users/',
            getuserbyname: baseApiUrl + 'user/:nome',
            getusers: baseApiUrl + 'users/:nome',
            login: baseApiUrl + 'login',
            postsbyiduser: baseApiUrl + 'user/:userid/posts/:seq',
            posts: baseApiUrl + 'posts/:seq',
            postsrecentes: baseApiUrl + 'posts/recentes/:idpost',
            gravarpost: baseApiUrl + 'post/'
        }
    });
