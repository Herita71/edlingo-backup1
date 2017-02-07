(function(){
    'use strict';
    angular.module('app.main')
    .controller('App', AppComponent);

    AppComponent.$inject = [];
    function AppComponent(){
        var that = this;
        that.title = 'Hello Andrew!';
    };
})();
