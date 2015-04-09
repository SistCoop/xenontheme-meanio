'use strict';

angular.module('mean.xenontheme-meanio').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('xenonthemeMeanio example page', {
      url: '/xenonthemeMeanio/example',
      templateUrl: 'xenontheme-meanio/views/index.html'
    });
  }
]);
