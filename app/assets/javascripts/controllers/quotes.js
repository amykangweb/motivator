(function(){

var app = angular.module('quotes');

app.controller('quotesCtrl', function($scope, dataService){

  dataService.getQuotes(function(response){
    console.log(response.data);
    $scope.quotes = response.data;
  })

});

})();
