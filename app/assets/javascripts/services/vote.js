(function() {

var app = angular.module('quotes');

app.service('votesService', function($http){

  this.upVote = function(quote) {
    $http.post('api/quotes/' + quote._id['$oid'] + '/votes', { score: true }).success(function(data){
      console.log(data);
      quote.votes = data;
    });
    return quote.votes;
  };

});

})();
