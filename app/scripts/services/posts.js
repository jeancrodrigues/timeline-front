'use strict';

angular.module('projetinhoFrontApp')
  .factory('PostsSvc', function ($resource,UrlValues,UserSvc) {
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
    ), Post = $resource(
        UrlValues.gravarpost, {},
        {
            gravar: {
                method: 'POST' , isArray: false,
                params: { iduser: '' , token:'', texto: '', titulo: '' },
                headers:{ 'Content-Type': 'application/x-www-form-urlencoded' }
            }
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
      },
      gravarpost : function(titulo,texto,fn){
          var user = UserSvc.getUser();
          if(user|user !== undefined){
              Post.gravar(
                  $.param(
                      {
                          titulo: titulo,
                          texto: texto,
                          iduser: user.id,
                          token: user.token
                      }
                  ),
                  fn
              );
          }
      }
    };
  });
