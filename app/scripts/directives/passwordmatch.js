'use strict';

angular.module('projetinhoFrontApp')
    .directive('passwordmatch', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl) {
                var firstPassword = '#' + attrs.pwCheck;
                elem.add(firstPassword).on('keyup',function(){
                    scope.$apply(function(){
                        var v = elem.val() === $(firstPassword).val();
                        ctrl.$setValidity('pwMatch',v)
                    });
                })
            }
        };
    });
