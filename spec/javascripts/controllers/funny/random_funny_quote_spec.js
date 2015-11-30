describe('Random Funny Quote', function(){

  beforeEach(module('quotes'));

  var ctrl, scope, httpBackend;
  var mockResults =
      {"motivational":[{"_id": {"$oid": "1"}, "body": "Motivational Quote.", "author": "Jane Doe", "category": "Motivational"},
                       {"_id": {"$oid": "2"}, "body": "Another Motivational Quote.", "author": "Jane Doe", "category": "Motivational"}],
       "funny":[{"_id": {"$oid": "3"}, "body": "Funny Quote.", "author": "Jane Doe", "category": "Funny"},
                {"_id": {"$oid": "4"}, "body": "Another Funny Quote.", "author": "Jane Doe", "category": "Funny"}],
       "sad":[{"_id": {"$oid": "5"}, "body": "Sad Quote.", "author": "Jane Doe", "category": "Sad"},
              {"_id": {"$oid": "6"}, "body": "Another Sad Quote", "author": "Jane Doe", "category": "Sad"}]};

  beforeEach(inject(function($controller, $httpBackend){
    scope = {};
    ctrl = $controller('funnyCtrl', { $scope: scope });
    httpBackend = $httpBackend;
  }));

  it('should return random funny quote', function(){
    httpBackend.expectGET('api/quotes').respond(mockResults);
    httpBackend.flush();
    var current = scope.singleQ;
    scope.generateQ('funny');
    expect(current.body).not.toEqual(scope.singleQ.body);
  });

});

