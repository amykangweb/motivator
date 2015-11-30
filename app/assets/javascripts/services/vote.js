(function() {

var app = angular.module('quotes');

app.service('votesService', function($http){

  this.upVote = function(quote) {
    $http.post('api/votes', { score: true, quote_id: quote._id['$oid'] }).success(function(data){
      quote.votes = data;
    });
    return quote.votes;
  };

});

})();
