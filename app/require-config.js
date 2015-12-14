'use strict';

require.config({
  baseUrl: 'custom-bootstrap-sass',
  paths: {
    // Libraries
    angular: 'dist/js/angular/angular.min',
    angularAnimate: 'dist/js/angular-animate/angular-animate.min',
    angularAria: 'dist/js/angular-aria/angular-aria.min',
    angularLoader: 'dist/js/angular-loader/angular-loader.min',
    angularMessageFormat: 'dist/js/angular-message-format/angular-message-format.min',
    angularMessages: 'dist/js/angular-messages/angular-messages.min',
    angularMocks: 'dist/js/angular-mocks/angular-mocks.min',
    angularResource: 'dist/js/angular-resource/angular-resource.min',
    angularRoute: 'dist/js/angular-route/angular-route.min',
    angularSanitize: 'dist/js/angular-sanitize/angular-sanitize.min',
    angularScenario: 'dist/js/angular-scenario/angular-scenario.min',
    angularTouch: 'dist/js/angular-touch/angular-touch.min',
    bootstrap: 'dist/js/bootstrap.min',
    jquery: 'dist/js/jquery.min',
    // app
    app: 'app/app'
  },
  shim: {
    angular: {'exports' : 'angular'},
    angularAnimate: ['angular'],
    angularAria: ['angular'],
    angularLoader: ['angular'],
    angularMessageFormat: ['angular'],
    angularMessages: ['angular'],
    angularMocks: {
      deps: ['angular'],
      exports: 'angular.mock'
    },
    angularResource: ['angular'],
    angularRoute: ['angular'],
    angularSanitize: ['angular'],
    angularScenario: ['angular'],
    angularTouch: ['angular'],
    bootstrap: ['jquery']
  },
  priority: ['angular']
});

require([
  'angular',
  'app'
],
function (angular, app){
  var $body = angular.element(document.body);
  angular.element(document).ready(function(){
    angular.bootstrap($body, ['bootstrapApp'], {strictDi: true});
  });
});