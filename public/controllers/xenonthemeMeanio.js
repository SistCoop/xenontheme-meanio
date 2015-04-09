'use strict';

/* jshint -W098 */
angular.module('mean.xenontheme-meanio').controller('XenonthemeMeanioController', ['$scope', 'Global', 'XenonthemeMeanio',
  function($scope, Global, XenonthemeMeanio) {
    $scope.global = Global;
    $scope.package = {
      name: 'xenontheme-meanio'
    };
  }
]);
