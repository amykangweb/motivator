describe('Quote Categories', function(){

  beforeEach(module('quotes'));

  var ctrl, scope, httpBackend;
  var mockResults = {"motivational":[{"_id": {"$oid": "1"}, "body": "Motivational Quote.", "author": "Jane Doe", "category": "Motivational"}],"funny":[{"_id": {"$oid": "2"}, "body": "Funny Quote.", "author": "Jane Doe", "category": "Funny"}],"sad":[{"_id": {"$oid": "3"}, "body": "Sad Quote.", "author": "Jane Doe", "category": "Sad"}]};

  beforeEach(inject(function($controller, $httpBackend){
    scope = {};
    ctrl = $controller('quotesCtrl', { $scope: scope });
    httpBackend = $httpBackend;
  }));

  it('should return motivational quotes', function(){
    httpBackend.expectGET('api/quotes').respond(mockResults);
    expect(scope.motivational).toBeUndefined();
    httpBackend.flush();
    console.log(scope.motivational);
    expect(scope.motivational[0].body).toEqual("Motivational Quote.");
  });

  it('should return funny quotes', function(){
    httpBackend.expectGET('api/quotes').respond(mockResults);
    expect(scope.funny).toBeUndefined();
    httpBackend.flush();
    console.log(scope.funny);
    expect(scope.funny[0].body).toEqual("Funny Quote.");
  });

  it('should return sad quotes', function(){
    httpBackend.expectGET('api/quotes').respond(mockResults);
    expect(scope.sad).toBeUndefined();
    httpBackend.flush();
    console.log(scope.sad);
    expect(scope.sad[0].body).toEqual("Sad Quote.");
  });

});
