'use strict';

/**
 * @ngdoc function
 * @name yotestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yotestApp
 */
angular.module('yotestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
