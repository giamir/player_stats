playerStats.controller('SingleMatchStats',
['Resource', 'RefineData',
function(Resource, RefineData) {
  var self = this;

  self.init = function() {
    self.currentStat = 'distance';
    self.graphOptions = { pointDot : false, showTooltips: false }
    Resource.getPlayerData()
    .then(function(response) {
      self.matchWeekKeys = Object.keys(response.data);
      self.currentMatchWeekKey = self.matchWeekKeys[0];
      self.updateGlobalData(self.currentMatchWeekKey);
    });
  };

  self.updateGlobalData = function(matchWeekKey) {
    Resource.getPlayerData()
    .then(function(response) {
      self.playerData = response.data
      self.currentMatchWeekKey = matchWeekKey;
      self.singleMatchStats = RefineData.getSingleMatchStats(
        self.playerData[matchWeekKey]);
      self.updateGraphData(self.currentStat);
    });
  };

  self.updateGraphData = function(stat) {
    self.currentStat = stat;
    self.graphData = [RefineData.getGraphData(
      self.playerData[self.currentMatchWeekKey], stat)];
    self.graphLabels = RefineData.getGraphLabels(
      self.playerData[self.currentMatchWeekKey], stat);
  };

  self.init();
}]);
