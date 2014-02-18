'use strict';

angular.module('projetinhoFrontApp').controller(
    'UserCtrl', function ($scope,UserSvc,PostsSvc) {

        var user = UserSvc.getUser()

        $scope.user = user;
        $scope.novopost = {};

        atualizarposts(0);

        function atualizarposts(seq){
            PostsSvc.getposts(user.iduser, seq ,function(data){
                $scope.posts = data;
            });
        }

        $scope.postar = function(post){
            post.nomeusuario = $scope.nomeusuario;
            post.datapublicacao = new Date();
            $scope.posts.push(post);
            $scope.novopost = {};
            atualizarposts(0);
        }



        /*
        $scope.posts = [
        	{ titulo: 'Post 1' , 
        	texto: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.', 
        	nomeusuario: 'usuario1' , datapublicacao: '20/01/2014 12:56:00' },
        	{ titulo: 'Post 2' , 
        	texto: 'Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. Ut scelerisque neque et turpis posuere pulvinar pellentesque nibh ullamcorper. Pharetra in mattis molestie, volutpat elementum justo. Aenean ut ante turpis. Pellentesque laoreet mé vel lectus scelerisque interdum cursus velit auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.', 
        	nomeusuario: 'usuario2' , datapublicacao: '15/01/2014 12:56:00' },
        	{ titulo: 'Post 3' , 
        	texto: 'Casamentiss faiz malandris se pirulitá, Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer Ispecialista im mé intende tudis nuam golada, vinho, uiski, carirí, rum da jamaikis, só num pode ser mijis. Adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' ,
        	nomeusuario: 'usuario3' , datapublicacao: '11/01/2014 12:56:00' },
        	{ titulo: 'Post 4' , 
        	texto: 'Cevadis im ampola pa arma uma pindureta. Nam varius eleifend orci, sed viverra nisl condimentum ut. Donec eget justis enim. Atirei o pau no gatis. Viva Forevis aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Copo furadis é disculpa de babadis, arcu quam euismod magna, bibendum egestas augue arcu ut est. Delegadis gente finis. In sit amet mattis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis. Pellentesque viverra accumsan ipsum elementum gravidis.' ,
        	nomeusuario: 'usuario4' , datapublicacao: '07/01/2014 12:56:00' },
        	{ titulo: 'Post 5' , 
        	texto: 'Forevis aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Copo furadis é disculpa de babadis, arcu quam euismod magna, bibendum egestas augue arcu ut est. Etiam ultricies tincidunt ligula, sed accumsan sapien mollis et. Delegadis gente finis. In sit amet mattis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis. Pellentesque viverra accumsan ipsum elementum gravida. Quisque vitae metus id massa tincidunt iaculis sed sed purus. Vestibulum viverra lobortis faucibus. Vestibulum et turpis.', 
        	nomeusuario: 'usuario5' , datapublicacao: '29/12/2013 23:00:00' },
            { titulo: 'Post 6' , 
            texto: 'Casamentiss faiz malandris se pirulitá, Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer Ispecialista im mé intende tudis nuam golada, vinho, uiski, carirí, rum da jamaikis, só num pode ser mijis. Adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' , 
            nomeusuario: 'usuario6' , datapublicacao: '23/12/2013 12:56:00' },
            { titulo: 'Post 7' , 
            texto: 'Vitis e adipiscing enim. Nam varius eleifend orci, sed viverra nisl condimentum ut. Donec eget justo enim. Atirei o pau no gatis. Quisque dignissim felis quis sapien ullamcorper varius tempor sem varius. Vivamus lobortis posuere facilisis. Sed auctor eros ac sapien sagittis accumsan. Integer semper accumsan arcu, at aliquam nisl sollicitudin non. Nullam pellentesque metus nec libero laoreet vitae vestibulum ante ultricies. Phasellus non mollis purus. Integer vel lacus dolor. Proin eget mi nec mauris convallis ullamcorper vel ac nulla. Nulla et semper metus.' , 
            nomeusuario: 'usuario7' , datapublicacao: '17/12/2013 12:56:00' },
            { titulo: 'Post 8' , 
            texto: 'Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. Ut scelerisque neque et turpis posuere pulvinar pellentesque nibh ullamcorper. Pharetra in mattis molestie, volutpat elementum justo. Aenean ut ante turpis. Pellentesque laoreet mé vel lectus scelerisque interdum cursus velit auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.' , 
            nomeusuario: 'usuario8' , datapublicacao: '10/12/2013 12:56:00' },
            { titulo: 'Post 9' , 
            texto: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.' , 
            nomeusuario: 'usuario9' , datapublicacao: '02/12/2013 12:56:00' }
        ];

        */
    }
);
