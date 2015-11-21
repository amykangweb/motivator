(function(){

var app = angular.module('quotes');

app.service('dataService', function($http){

  this.getQuotes = function(callback) {
    $http.get('api/quotes').then(callback);
  };

});

})();
