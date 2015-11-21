(function(){

var app = angular.module('quotes');

app.service('quotesService', function($http, $q){

  this.getQuotes = function() {
    var deferred = $q.defer();
    $http.get('api/quotes').success(function(data){
      deferred.resolve(data);
    });
    return deferred.promise;
  }

});

})();
