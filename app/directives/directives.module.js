
    angular.module('edlingo.directives', []);

    angular.module('edlingo.directives')
    .directive('edAudio', ['$interval', function($interval) {
    
    function link(scope, element, attrs) {
        element.on('click', function(){
            alert('Audio ...');
        });
        element.css('color', 'purple');
    }
    
      return {
        link: link
      };
    }]);


