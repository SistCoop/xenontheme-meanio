'use strict';

angular.module('mean.xenontheme').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('xenontheme example page', {
      url: '/xenontheme/example',
      templateUrl: 'xenontheme/views/index.html'
    });
  }
]);
