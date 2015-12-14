define([
  'angular',
  'angularAnimate',
  'angularRoute'
],
function(angular, angularAnimate, andgularRoute){
  return angular.module('bootstrapApp', ['ngRoute'])
  .controller('MainController', ['$location', '$route', MainController])
  .component('customBootstrap', {
    isolate: false,
    template: [
      '<div class="container-fluid">',
        '<h1>Another Item</h1>',
      '</div>'
    ].join('')
  });
  
  function MainController($location, $route) {
    
  }
  
})