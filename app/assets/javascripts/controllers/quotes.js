(function(){

var app = angular.module('quotes');

app.controller('quotesCtrl', function($scope, quotesService){

  var quotes = quotesService.getQuotes();
  quotes.then(function(data){
    $scope.quotes = data;
    $scope.motivational = data.motivational;
    $scope.funny = data.funny;
    $scope.sad = data.sad;
    $scope.generateM();
    $scope.generateF();
    $scope.generateS();
  });

  $scope.generateM = function(){
    var current = $scope.singleM;
    $scope.singleM = $scope.motivational[Math.floor(Math.random() * $scope.motivational.length)];
    while(current === $scope.singleM) {
      $scope.singleM = $scope.motivational[Math.floor(Math.random() * $scope.motivational.length)];
    }
  };

  $scope.generateF = function(){
    var current = $scope.singleF;
    $scope.singleF = $scope.funny[Math.floor(Math.random() * $scope.funny.length)];
    while(current === $scope.singleF) {
      $scope.singleF = $scope.funny[Math.floor(Math.random() * $scope.funny.length)];
    }
  };

  $scope.generateS = function(){
    var current = $scope.singleS;
    $scope.singleS = $scope.sad[Math.floor(Math.random() * $scope.sad.length)];
    while(current === $scope.singleS) {
      $scope.singleS = $scope.sad[Math.floor(Math.random() * $scope.sad.length)];
    }
  };

});

})();
