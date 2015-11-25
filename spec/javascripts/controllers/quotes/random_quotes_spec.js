describe('Random Quote', function(){

  beforeEach(module('quotes'));

  var ctrl, scope, httpBackend;
  var mockResults =
      {"motivational":[{"body": "Motivational Quote.", "author": "Jane Doe", "category": "Motivational"},
                       {"body": "Another Motivational Quote.", "author": "Jane Doe", "category": "Motivational"},
                       {"body": "Third Motivational Quote.", "author": "Jane Doe", "category": "Motivational"}],
       "funny":[{"body": "Funny Quote.", "author": "Jane Doe", "category": "Funny"},
                {"body": "Another Funny Quote.", "author": "Jane Doe", "category": "Funny"},
                {"body": "Third Funny Quote.", "author": "Jane Doe", "category": "Funny"}],
       "sad":[{"body": "Sad Quote.", "author": "Jane Doe", "category": "Sad"},
              {"body": "Another Sad Quote", "author": "Jane Doe", "category": "Sad"},
              {"body": "Third Sad Quote.", "author": "Jane Doe", "category": "Sad"}]};

  beforeEach(inject(function($controller, $httpBackend){
    scope = {};
    ctrl = $controller('quotesCtrl', { $scope: scope });
    httpBackend = $httpBackend;
  }));

  it('should return random motivational quote', function(){
    httpBackend.expectGET('api/quotes').respond(mockResults);
    httpBackend.flush();
    var current = scope.singleM;
    scope.generateM();
    expect(current.body).not.toEqual(scope.singleM.body);
  });

  it('should return random funny quote', function(){
    httpBackend.expectGET('api/quotes').respond(mockResults);
    httpBackend.flush();
    var current = scope.singleF;
    scope.generateF();
    expect(current.body).not.toEqual(scope.singleF.body);
  });

  it('should return random sad quote', function(){
    httpBackend.expectGET('api/quotes').respond(mockResults);
    httpBackend.flush();
    var current = scope.singleS;
    scope.generateS();
    console.log(scope.singleS.body);
    expect(current.body).not.toEqual(scope.singleS.body);
  });

});
