describe('factory: Resource', function() {
  var resource;
  var httpBackend;

  beforeEach(module('PlayerStats'));

  beforeEach(inject(function(Resource, $httpBackend) {
    resource = Resource;
    httpBackend = $httpBackend;
    httpBackend.expectGET("/data/player.json").respond('data');
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('#getPlayerData', function() {
    it('returns data appropriately', function() {
      resource.getPlayerData().then(function(response) {
        expect(response.data).toEqual('data');
      });
      httpBackend.flush();
    });
  });
});
