'use strict';

angular.module('projetinhoFrontApp')
  .factory('PostsSvc', function ($resource,UrlValues) {
    var PostsResource = $resource(
        UrlValues.postsbyiduser,
        { userid: '@userid', seq: '@seq' },
        {
            get: {method: 'GET' , isArray: true}
        }
    );
    return {
      getposts: function (userid,seq,fn) {
          if(seq|seq !== undefined){
            PostsResource.get({userid:userid},fn);
          }else{
            PostsResource.get({userid:userid, seq: seq},fn);
          }
      }
    };
  });
