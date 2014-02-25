'use strict';

describe('Controller: BuscausuarioCtrl', function () {

  // load the controller's module
  beforeEach(module('projetinhoFrontApp'));

  var BuscausuarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuscausuarioCtrl = $controller('BuscausuarioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
