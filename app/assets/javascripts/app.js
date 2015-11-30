(function(){

var app = angular.module('quotes', ['templates', 'ngRoute']);

app.config(['$httpProvider', function($httpProvider) {
  authToken = $("meta[name=\"csrf-token\"]").attr("content");
  $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
  $httpProvider.defaults.headers.common.Accept = 'application/json';
}]);

app.config(function($routeProvider) {

  $routeProvider

    .when('/', {
      templateUrl: 'templates/page-motivational.html.erb',
      controller: 'motivationalCtrl'
    })

    .when('/motivational', {
      templateUrl: 'templates/page-motivational.html.erb',
      controller: 'motivationalCtrl'
    })

    .when('/funny', {
      templateUrl: 'templates/page-funny.html.erb',
      controller: 'funnyCtrl'
    })

    .when('/sad', {
      templateUrl: 'templates/page-sad.html.erb',
      controller: 'sadCtrl'
    });

});

})();
