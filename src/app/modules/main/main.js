(function(){
    'use strict';

    AppComponent.$inject = ['config'];
    function AppComponent(config){
        var that = this;
        that.title = config.name;
    };

    angular.module('app.main')
    .controller('App', AppComponent);
})();
