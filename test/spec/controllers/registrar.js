'use strict';

describe('Controller: RegistrarCtrl', function () {

  // load the controller's module
  beforeEach(module('projetinhoFrontApp'));

  var RegistrarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrarCtrl = $controller('RegistrarCtrl', {
      $scope: scope
    });
  }));

});
