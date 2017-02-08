(function() {
  'use strict';

  boardController.$inject = ['$scope','ngAudio'];
  function boardController($scope, ngAudio) {
      $scope.audio = ngAudio.load('app/assets/audio/001.mp3');
  }

  angular.module('app.board')
    .controller('boardController', boardController);
})();
