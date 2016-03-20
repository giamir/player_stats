describe('controller: GlobalStats', function() {
  var ctrl;
  var scope;
  var ResourceFactoryMock;
  var RefineDataFactoryMock;

  beforeEach(function() {
    ResourceFactoryMock = jasmine.createSpyObj('Resource', ['getPlayerData']);
    RefineDataFactoryMock = jasmine.createSpyObj('RefineData', ['getGlobalStats']);
    module('PlayerStats', {
      Resource: ResourceFactoryMock,
      RefineData: RefineDataFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    ResourceFactoryMock.getPlayerData.and.returnValue($q.when(playerData));
    RefineDataFactoryMock.getGlobalStats.and.returnValue(globalStatsArray);
    ctrl = $controller('GlobalStats');
    scope = $rootScope;
  }));

  it('sets globalStats retrieving data from ResourceFactory and elaborating them using RefineDataFactory', function() {
    scope.$digest();
    expect(ctrl.globalStats).toEqual(globalStatsArray);
  });
});
