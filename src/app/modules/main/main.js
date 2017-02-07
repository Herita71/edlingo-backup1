(function(){
    'use strict';

    AppComponent.$inject = ['config', '$scope', '$state'];
    function AppComponent(config, $scope, $state){
        var that = this;
        that.title = config.name;

        $scope.config = config;
    };

    angular.module('app.main')
    .controller('App', AppComponent);
})();
