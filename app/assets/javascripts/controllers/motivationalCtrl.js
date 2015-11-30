(function(){

var app = angular.module('quotes');

app.controller('motivationalCtrl', function($scope, $http, quotesService){

  var quotes = quotesService.getQuotes();
  quotes.then(function(data){
    $scope.motivational = data.motivational;
    $scope.generateQ('motivational');
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
