'use strict';

describe('Directive: fastMap', function () {

  // load the directive's module
  beforeEach(module('yotestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fast-map></fast-map>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fastMap directive');
  }));
});
