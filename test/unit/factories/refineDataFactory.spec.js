describe('factory: RefineData', function() {
  var refineData;
  var ElaborateDataFactoryMock;

  beforeEach(function(){
    ElaborateDataFactoryMock = jasmine.createSpyObj('ElaborateData',
      [
        'reduceObjToArray',
        'getMatchGlobalStatsObj',
        'getLastMatchGlobalStatsObj',
        'getSeasonStatsObj'
      ]
    );
    module('PlayerStats', { ElaborateData: ElaborateDataFactoryMock });
  });

  beforeEach(inject(function(RefineData) {
    ElaborateDataFactoryMock.reduceObjToArray.and.returnValue(matchArrayObj);
    refineData = RefineData;
  }));

  describe('#getGraphData', function() {
    it('returns an array with the stat trend every 5 minutes segments', function() {
      var graphData = refineData.getGraphData(matchObj, 'distance');
      expect(graphData).toEqual(matchArrayObj['distance']);
    });
  });

  describe('#getGraphLabels', function() {
    it('returns an array with the minutes labels for the statistic', function() {
      var graphLabels = refineData.getGraphLabels(matchObj, 'distance');
      expect(graphLabels).toEqual(graphLabelsArray);
    });
  });

  describe('#getSingleMatchStats', function() {
    it('returns an array of hashes representing the global statistic of the match', function() {
      ElaborateDataFactoryMock.getMatchGlobalStatsObj.and.returnValue(matchGlobalObj);
      var singleMatchStats = refineData.getSingleMatchStats(matchObj);
      expect(singleMatchStats).toEqual(singleMatchStatsArray);
    });
  });

  describe('#getGlobalStats', function() {
    it('returns an array of hashes representing the avg statistic of the season and the last match', function() {
      ElaborateDataFactoryMock.getLastMatchGlobalStatsObj.and.returnValue(matchGlobalObj);
      ElaborateDataFactoryMock.getSeasonStatsObj.and.returnValue(seasonObj);
      var globalStats = refineData.getGlobalStats(matchesObj);
      expect(globalStats).toEqual(globalStatsArray);
    });
  });
});
