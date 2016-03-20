describe('controller: SingleMatchStats', function() {
  var ctrl;
  var scope;
  var ResourceFactoryMock;
  var RefineDataFactoryMock;

  beforeEach(function() {
    ResourceFactoryMock = jasmine.createSpyObj('Resource', ['getPlayerData']);
    RefineDataFactoryMock = jasmine.createSpyObj('RefineData',
      [
        'getSingleMatchStats',
        'getGraphData',
        'getGraphLabels'
      ]
    );
    module('PlayerStats', {
      Resource: ResourceFactoryMock,
      RefineData: RefineDataFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    ResourceFactoryMock.getPlayerData.and.returnValue($q.when(playerData));
    RefineDataFactoryMock.getSingleMatchStats.and.returnValue(singleMatchStatsArray);
    RefineDataFactoryMock.getGraphData.and.returnValue(matchArrayObj['sprint']);
    RefineDataFactoryMock.getGraphLabels.and.returnValue(graphLabelsArray);
    ctrl = $controller('SingleMatchStats');
    scope = $rootScope;
  }));

  it('initializes setting current statistic to distance', function() {
    scope.$digest();
    expect(ctrl.currentStat).toEqual('distance');
  });

  it('initializes setting match week keys based on the data retrieved', function() {
    scope.$digest();
    expect(ctrl.matchWeekKeys).toEqual(['mw2','mw1']);
  });

  it('initializes setting current match week key to the last match', function() {
    scope.$digest();
    expect(ctrl.currentMatchWeekKey).toEqual('mw2');
  });

  it('calls updateGlobalData', function() {
    spyOn(ctrl, 'updateGlobalData').and.callThrough();
    scope.$digest();
    expect(ctrl.updateGlobalData).toHaveBeenCalledWith(ctrl.currentMatchWeekKey);
  });

  describe('#updateGlobalData', function() {
    beforeEach(function() {
      scope.$digest();
      spyOn(ctrl, 'updateGraphData').and.callThrough();
      ctrl.updateGlobalData('mw1');
      scope.$digest();
    });
    it('retrieves player data using ResourceFactory and updates playerData', function() {
      expect(ctrl.playerData).toEqual(playerData.data);
    });
    it('changes the match week key', function() {
      expect(ctrl.currentMatchWeekKey).toEqual('mw1');
    });
    it('elaborates the single match stats in a convenient format using RefineDataFactory', function() {
      expect(ctrl.singleMatchStats).toEqual(singleMatchStatsArray);
    });
    it('calls updateGraphData', function() {
      expect(ctrl.updateGraphData).toHaveBeenCalledWith(ctrl.currentStat);
    });
  });

  describe('#updateGraphData', function() {
    beforeEach(function() {
      scope.$digest();
      ctrl.updateGraphData('sprint');
      scope.$digest();
    });
    it('changes the current statistic', function() {
      expect(ctrl.currentStat).toEqual('sprint');
    });
    it('updates the graph data', function() {
      expect(ctrl.graphData).toEqual([matchArrayObj['sprint']]);
    });
    it('updates the graph labels', function() {
      expect(ctrl.graphLabels).toEqual(graphLabelsArray);
    });
  });
});
