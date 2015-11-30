describe('Votes Controller', function(){

  beforeEach(module('quotes'));

  var ctrl, scope, httpBackend;
  var mockResults = {"motivational":[{"_id": {"$oid": "1"}, "body": "Motivational Quote.", "author": "Jane Doe", "category": "Motivational", "votes": [{"score": true}]}]};
  var voteResults = [{"score": true}, {"score": true}];

  beforeEach(inject(function($controller, $httpBackend){
    scope = {};
    ctrl = $controller('motivationalCtrl', { $scope: scope });
    httpBackend = $httpBackend;
    httpBackend.expectGET('api/quotes').respond(mockResults);
    httpBackend.flush();
    ctrl = $controller('votesCtrl', { $scope: scope });
  }));

  it('should return votes for motivational quote', function(){
    var quote = scope.motivational[0];
    httpBackend.expectPOST('api/quotes/' + quote._id['$oid'] + '/votes').respond(voteResults);
    scope.upVote(quote);
    httpBackend.flush();
    expect(quote.votes).toEqual(voteResults);
  });

});
