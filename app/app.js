var myApp = angular.module('edlingo', [
  'ui.router',
  'edlingo.directives'
]);

myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  var appState = {
    name: 'app',
    url: '/app',
    templateUrl: 'public/app.html',
    controller: 'AppCtrl'
  };

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  };

  var postState = {
    name: 'app.post',
    url: '/post/{postId}',
    templateUrl: function(params) {
      return 'public/posts/' + params.postId + '.html';
    }
  };

  $stateProvider.state(appState);
  $stateProvider.state(aboutState);
  $stateProvider.state(postState);
  $urlRouterProvider.otherwise("/app");
}]);

myApp.controller('AppCtrl', ['$scope', '$state', function($scope, $state){
  $scope.postId = 1;
  $scope.goNext = function(){
    $scope.postId += 1;
    $state.go('app.post',{postId:$scope.postId} );
  };
  $scope.goPrev = function(){
    $scope.postId -= 1;
    $state.go('app.post',{postId:$scope.postId} );
  };
}]);