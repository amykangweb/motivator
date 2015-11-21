describe('Service: quotesService', function(){

  beforeEach(module('quotes'));

  var service, httpBackend;
  var mockResults = [{"body": "Lorem Ipsum", "author": "Jane Done"}];

  beforeEach(inject(function(_quotesService_, $httpBackend){
    service = _quotesService_;
    httpBackend = $httpBackend;
  }));

  it('should return quotes', function(){
    httpBackend.expectGET('api/quotes').respond(mockResults[0].body);
    var results = service.getQuotes();
    results.then(function(data){
      expect(data).toEqual("Lorem Ipsum");
    });
    httpBackend.flush();
  });

});

