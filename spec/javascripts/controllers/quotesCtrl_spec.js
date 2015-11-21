describe('Controller: quotesCtrl', function(){

  beforeEach(module('quotes'));

  var ctrl, scope, httpBackend;
  var mockResults = [{"body": "Lorem Ipsum", "author": "Jane Done"}];

  beforeEach(inject(function($controller, $httpBackend){
    scope = {};
    ctrl = $controller('quotesCtrl', { $scope: scope });
    httpBackend = $httpBackend;
  }));

  it('should return quotes', function(){
    httpBackend.expectGET('api/quotes').respond(mockResults[0].body);
    expect(scope.quotes).toBeUndefined();
    httpBackend.flush();
    expect(scope.quotes).toEqual("Lorem Ipsum");
  });

});
