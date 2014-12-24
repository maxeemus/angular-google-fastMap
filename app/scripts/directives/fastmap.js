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
  }])
  .directive('fastMapWindow', ['uiGmapGoogleMapApi', function(uiGmapGoogleMapApi){
  	return {
        restrict: 'E',
        transclude: true,
        template: '<span class="angular-google-maps-window" ng-transclude></span>',
        require: '^fastMap',
        link: function (scope, element, attr) {
        	uiGmapGoogleMapApi.then(function (maps) {
    			var wnd = new maps.InfoWindow();
	            scope.$watch(attr.show, function (newValue, oldValue) {
	                if (newValue !== oldValue) {
	                    var gMarker = scope.$eval(attr.gMarker);
	                    wnd.setContent(element.children().html());
	                    wnd.open(gMarker.map, gMarker);
	                }
	            });
	        });            
        }
    };
  }]);
