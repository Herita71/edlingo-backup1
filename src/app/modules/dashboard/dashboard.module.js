(function() {
  'use strict';

  var module = angular.module('app.dashboard', ['ui.router']);

  module.config(appConfig);

  appConfig.$inject = ['$stateProvider'];

  function appConfig($stateProvider) {
    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/modules/board/board.html'
      })
  }
})();
