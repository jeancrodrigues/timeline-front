'use strict';

angular.module('projetinhoFrontApp')
  .factory('PostsSvc', function ($resource,UrlValues) {
    var Postsbyiduser = $resource(
        UrlValues.postsbyiduser,
        { userid: '@userid', seq: '@seq' },
        {
            get: {method: 'GET' , isArray: true}
        }
    ), PostsRecentes = $resource(
        UrlValues.postsrecentes,
        { seq: '@seq' },
        {
            get: {method: 'GET' , isArray: true}
        }
    );

    return {
      getpostsfromuser: function (fn,userid,seq) {
          if(seq|seq !== undefined){
            Postsbyiduser.get({userid:userid},fn);
          }else{
            Postsbyiduser.get({userid:userid, seq: seq},fn);
          }
      },
      getpostsrecentes : function(fn,seq){
          if(seq|seq !== undefined){
            PostsRecentes.get(fn);
          }else{
            PostsRecentes.get({seq: seq},fn);
          }
      }
    };
  });
