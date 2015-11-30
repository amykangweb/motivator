(function(){

var app = angular.module('quotes');

app.controller('sadCtrl', function($scope, $http, quotesService){

  var quotes = quotesService.getQuotes();
  quotes.then(function(data){
    $scope.sad = data.sad;
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
