describe('Controller: quotesCtrl', function(){

  beforeEach(module('quotes'));

  var ctrl, scope, httpBackend;
  var mockResults = {"sad":[{"body": "Lorem Ipsum", "author": "Jane Done", "category": "Sad"}]};

  beforeEach(inject(function($controller, $httpBackend){
    scope = {};
    ctrl = $controller('quotesCtrl', { $scope: scope });
    httpBackend = $httpBackend;
  }));

  it('should return quotes', function(){
    httpBackend.expectGET('api/quotes').respond(mockResults);
    expect(scope.sad).toBeUndefined();
    httpBackend.flush();
    console.log(scope.sad);
    expect(scope.sad[0].body).toEqual("Lorem Ipsum");
  });

});
