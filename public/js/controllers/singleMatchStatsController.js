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
      self.singleMatchStats = RefineData.singleMatchStats(
        self.playerData[matchWeekKey]);
      self.updateGraphData(self.currentStat);
    });
  };

  self.updateGraphData = function(stat) {
    self.currentStat = stat;
    var graphArray = RefineData.graphStats(
      self.playerData[self.currentMatchWeekKey], stat);
    self.graphData = [graphArray];
    self.graphLabels = [];
    for(var i = 0; i < graphArray.length; i++) { self.graphLabels.push(i * 5); }
  };

  self.init();
}]);
