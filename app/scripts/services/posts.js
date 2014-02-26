'use strict';

angular.module('projetinhoFrontApp')
  .factory('PostsSvc', function ($resource,UrlValues,UserSvc) {
    var Postsbyiduser = $resource(
        UrlValues.postsbyiduser,
        { userid: '@userid', seq: '@seq' },
        {
            get: {method: 'GET' , isArray: true}
        }
    ), Posts = $resource(
        UrlValues.posts,
        { seq: '@seq' },
        {
            get: {method: 'GET' , isArray: true}
        }
    ),Postsrecentes = $resource(
        UrlValues.postsrecentes,
        { idpost: '@idpost' },
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
      getposts : function(fn,seq){
          if(seq|seq !== undefined){
            Posts.get(fn);
          }else{
            Posts.get({seq: seq},fn);
          }
      },
      getpostsrecentes : function(idpost,fn){
          Postsrecentes.get({idpost: idpost},fn);
      },
      gravarpost : function(titulo,texto,fn){
          var user = UserSvc.getUser();
          if(user|user !== undefined){
              Post.gravar(
                  $.param(
                      {
                          titulo: titulo,
                          texto: texto,
                          iduser: user.iduser,
                          token: user.token
                      }
                  ),
                  fn
              );
          }
      }
    };
  });
