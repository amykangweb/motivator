(function(){

var app = angular.module('quotes', []);

app.config(['$httpProvider', function($httpProvider) {
  authToken = $("meta[name=\"csrf-token\"]").attr("content");
  $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
  $httpProvider.defaults.headers.common.Accept = 'application/json';
}]);

})();
