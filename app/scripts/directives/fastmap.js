'use strict';

/**
 * @ngdoc directive
 * @name yotestApp.directive:fastMap
 * @description
 * # fastMap
 */
angular.module('googleFastMap', ['uiGmapgoogle-maps'])
  .directive('fastMap', ['uiGmapGoogleMapApi', function (uiGmapGoogleMapApi) {
    return {
		restrict: 'E',
    	transclude: true,
        template: '<div class="angular-google-map-container"><div style="display:none;" ng-transclude></div></div>',
        controller: function ($scope) { },
      	link: function postLink(scope, element, attrs) {
	        uiGmapGoogleMapApi.then(function (maps) {

	        });	        
	      }
    };
  }]);
