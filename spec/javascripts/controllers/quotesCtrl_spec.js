describe('Controller: quotesCtrl', function(){

  beforeEach(module('quotes'));

  var ctrl, scope, httpBackend;
  var mockResults = [{"body": "Lorem Ipsum", "author": "Jane Done", "category": "Sad"}];

  beforeEach(inject(function($controller, $httpBackend){
    scope = {};
    ctrl = $controller('quotesCtrl', { $scope: scope });
    httpBackend = $httpBackend;
  }));

  it('should return quotes', function(){
    httpBackend.expectGET('api/quotes').respond(mockResults[0].body);
    expect(scope.sad).toBeUndefined();
    httpBackend.flush();
    expect(scope.sad).toEqual("Lorem Ipsum");
  });

});
