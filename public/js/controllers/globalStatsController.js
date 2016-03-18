playerStats.controller('GlobalStats',
['Resource', 'RefineData' ,
function(Resource, RefineData) {
  var self = this;

  self.init = function() {
    Resource.getPlayerData()
    .then(function(response) {
      self.globalStats = RefineData.globalStats(response.data);
    });
   };

   self.init();
}]);
