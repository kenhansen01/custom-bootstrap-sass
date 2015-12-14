'use strict';

require.config({
  baseUrl: '',
  paths: {
    // Libraries
    angular: 'dist/js/angular/angular',
    angularAnimate: 'dist/js/angular-animate/angular-animate',
    angularAria: 'dist/js/angular-aria/angular-aria',
    angularLoader: 'dist/js/angular-loader/angular-loader',
    angularMessageFormat: 'dist/js/angular-message-format/angular-message-format',
    angularMessages: 'dist/js/angular-messages/angular-messages',
    angularMocks: 'dist/js/angular-mocks/angular-mocks',
    angularResource: 'dist/js/angular-resource/angular-resource',
    angularRoute: 'dist/js/angular-route/angular-route',
    angularSanitize: 'dist/js/angular-sanitize/angular-sanitize',
    angularScenario: 'dist/js/angular-scenario/angular-scenario',
    angularTouch: 'dist/js/angular-touch/angular-touch',
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
  angular.element(document).ready(function(){
    angular.bootstrap(document, ['bootstrapApp'], {strictDi: true});
  });
});