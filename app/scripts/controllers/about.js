'use strict';

/**
 * @ngdoc function
 * @name yotestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yotestApp
 */
angular.module('yotestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
