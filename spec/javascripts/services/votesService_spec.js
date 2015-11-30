describe('Service: votesService', function(){

  beforeEach(module('quotes'));

  var service, httpBackend;
  var mockResults = {"motivational":[{"_id": {"$oid": "1"}, "body": "Motivational Quote.", "author": "Jane Doe", "category": "Motivational", "votes": [{"score": true}]}]};
  var voteResults = [{"score": true}, {"score": true}];

  beforeEach(inject(function(_votesService_, $httpBackend){
    service = _votesService_;
    httpBackend = $httpBackend;
  }));

  it('should create and return votes', function(){
    var quote = mockResults.motivational[0];
    httpBackend.expectPOST('api/votes').respond(voteResults);
    service.upVote(quote);
    httpBackend.flush();
    expect(quote.votes).toEqual(voteResults);
  });

});
