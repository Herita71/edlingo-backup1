(function() {
  'use strict';

  var module = angular.module('app.board', ['ui.router']);

  module.config(appConfig);

  appConfig.$inject = ['$stateProvider'];

  function appConfig($stateProvider) {
    $stateProvider
      .state('app.board', {
        url: '/board',
        templateUrl: 'app/modules/board/board.html'
      })
  }
})();
