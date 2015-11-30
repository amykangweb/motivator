describe('Motivational Quotes', function(){

  beforeEach(module('quotes'));

  var ctrl, scope, httpBackend;
  var mockResults = {"motivational":[{"_id": {"$oid": "1"}, "body": "Motivational Quote.", "author": "Jane Doe", "category": "Motivational"}],"funny":[{"_id": {"$oid": "2"}, "body": "Funny Quote.", "author": "Jane Doe", "category": "Funny"}],"sad":[{"_id": {"$oid": "3"}, "body": "Sad Quote.", "author": "Jane Doe", "category": "Sad"}]};

  beforeEach(inject(function($controller, $httpBackend){
    scope = {};
    ctrl = $controller('motivationalCtrl', { $scope: scope });
    httpBackend = $httpBackend;
  }));

  it('should return motivational quotes', function(){
    httpBackend.expectGET('api/quotes').respond(mockResults);
    expect(scope.motivational).toBeUndefined();
    httpBackend.flush();
    console.log(scope.motivational);
    expect(scope.motivational[0].body).toEqual("Motivational Quote.");
  });

});

