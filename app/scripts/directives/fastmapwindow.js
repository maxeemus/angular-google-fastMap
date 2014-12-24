'use strict';

/**
 * @ngdoc directive
 * @name yotestApp.directive:fastMapWindow
 * @description
 * # fastMapWindow
 */
angular.module('googleFastMap')
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
