'use strict';

describe('Service: UrlValues', function () {

  // load the service's module
  beforeEach(module('projetinhoFrontApp'));

  // instantiate service
  var UrlValues;
  beforeEach(inject(function (_UrlValues_) {
    UrlValues = _UrlValues_;
  }));

  it('should do something', function () {
    expect(!!UrlValues).toBe(true);
  });

});
