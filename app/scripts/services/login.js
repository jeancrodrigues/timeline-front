'use strict';

angular.module('projetinhoFrontApp')
    .factory('LoginSvc', function ($resource, UrlValues, UserSvc) {
        var Login = $resource( UrlValues.login ,{},{
            login: {method: 'POST',
                params: { username: '' , pass:'' },
                headers:{ 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        });

        return {
            logar: function(username,senha,fnSucess,fnError){
                Login.login(
                    $.param(
                        {username: username, pass: senha}
                    ),
                    fnSucess,       // funcao executada quando o post for de boas
                    fnError         // funcao executada se der erro no post
                );
            },
            deslogar: function(){
                UserSvc.unsetUser();
            },
            isUsuarioLogado: function(){
                return !(UserSvc.getUser() === null);
            }
        };
    });
