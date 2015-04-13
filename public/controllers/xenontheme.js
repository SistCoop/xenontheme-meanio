'use strict';

/* jshint -W098 */
angular.module('mean.xenontheme').controller('XenonthemeController', ['$scope', 'Global', 'Xenontheme',
  function($scope, Global, Xenontheme) {
    $scope.global = Global;
    $scope.package = {
      name: 'xenontheme'
    };
  }
]);
