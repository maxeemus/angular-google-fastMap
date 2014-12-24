'use strict';

/**
 * @ngdoc overview
 * @name yotestApp
 * @description
 * # yotestApp
 *
 * Main module of the application.
 */
angular
  .module('yotestApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'uiGmapgoogle-maps',
    'googleFastMap'
  ])
  .config(['$routeProvider', 'uiGmapGoogleMapApiProvider', function ($routeProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
  }]);
