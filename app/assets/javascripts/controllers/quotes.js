(function(){

var app = angular.module('quotes');

app.controller('quotesCtrl', function($scope, quotesService){

  var quotes = quotesService.getQuotes();
  quotes.then(function(data){
    $scope.quotes = data;
  });

});

})();
