(function(){

var app = angular.module('quotes');

app.controller('quotesCtrl', function($scope, $http, quotesService){

  var quotes = quotesService.getQuotes();
  quotes.then(function(data){
    console.log(data.one);
    $scope.quotes = data;
    $scope.motivational = data.motivational;
    $scope.funny = data.funny;
    $scope.sad = data.sad;
    $scope.generateQ('motivational');
    $scope.generateQ('funny');
    $scope.generateQ('sad');
  });

  $scope.generateQ = function(category){
    console.log(category);
    var current = $scope.singleQ;
    $scope.singleQ = $scope[category][Math.floor(Math.random() * $scope[category].length)];
    while(current === $scope.singleQ) {
      $scope.singleQ = $scope[category][Math.floor(Math.random() * $scope[category].length)];
    }
  };

});

})();
