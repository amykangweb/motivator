(function(){

var app = angular.module('quotes');

app.controller('funnyCtrl', function($scope, $http, quotesService){

  var quotes = quotesService.getQuotes();
  quotes.then(function(data){
    $scope.funny = data.funny;
    $scope.generateQ('funny');
  });

  $scope.generateQ = function(category){
    var current = $scope.singleQ;
    $scope.singleQ = $scope[category][Math.floor(Math.random() * $scope[category].length)];
    while(current === $scope.singleQ) {
      $scope.singleQ = $scope[category][Math.floor(Math.random() * $scope[category].length)];
    }
  };

});

})();
