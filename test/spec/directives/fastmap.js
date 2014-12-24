'use strict';

describe('Directive: fastMap', function () {

  // load the directive's module
  beforeEach(module('googleFastMap'));

  var element, $element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should append elements to directi', inject(function ($compile) {
    element = angular.element('<fast-map></fast-map>');
    element = $compile(element)(scope);

    $element = $(element);
    
    expect($element.find('div.angular-google-map-container div[ng-transclude][style="display:none;"]').length).toBe(1);

  }));
});
