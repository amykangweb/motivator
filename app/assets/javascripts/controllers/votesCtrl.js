(function() {

var app = angular.module('quotes');

app.controller('votesCtrl', function($scope, $http, votesService){

  $scope.upVote = function(quote) {
    quote.votes = votesService.upVote(quote);
  };

});

})();
