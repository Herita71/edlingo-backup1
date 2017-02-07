(function(){
    'use strict';
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function appConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: 'app/modules/main/app.html'
        });

        $urlRouterProvider.otherwise('/app');
    }
    angular.module('app.main', [
        //Imports
        'ui.router'
    ])
    .config(appConfig);
})();
