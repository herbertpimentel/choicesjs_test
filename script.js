(function(){

    requirejs.config({
        baseUrl: '.',
        paths: {
            choices: 'bower_components/choices.js/assets/scripts/dist/choices'
        }
    });

    requirejs( ['choices'], function(Choices) { 
        var example = new Choices();
    });

})();