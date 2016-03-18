playerStats.controller('SingleMatchStats',
['Resource', 'RefineData',
function(Resource, RefineData) {
  var self = this;
  self.graphOptions = { pointDot : false, showTooltips: false }

  self.getGlobalData = function(matchKey) {
    Resource.getPlayerData()
    .then(function(response) {
      self.mws = Object.keys(response.data)
      if(!matchKey) { matchKey = self.mws[0] }
      self.matchKey = matchKey;
      if(!self.stat) { self.stat = 'distance' }
      self.singleMatchStats = RefineData.singleMatchStats(response.data[matchKey]);
      self.getGraphData(self.stat);
    });
   };

   self.getGraphData = function(stat) {
     Resource.getPlayerData()
     .then(function(response) {
       self.stat = stat;
       var data = RefineData.graphStats(response.data[self.matchKey], stat);
       self.graphData = [RefineData.graphStats(response.data[self.matchKey], stat)];
       self.graphLabels = [];
       for(var i = 0; i < data.length; i++) { self.graphLabels.push(i * 5); }
     });
    };

    self.getGlobalData();
}]);
