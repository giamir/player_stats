(function() {

  function GlobalStats(Resource, RefineData) {
    var self = this;

    self.init = function() {
      Resource.getPlayerData()
      .then(function(response) {
        self.globalStats = RefineData.getGlobalStats(response.data);
      });
     };

     self.init();
  }

  GlobalStats.$inject = ['Resource', 'RefineData'];

  angular.module('PlayerStats')
    .controller('GlobalStats', GlobalStats);
})();
