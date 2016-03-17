playerStats.factory('Resource',['$http', function($http) {
  var resource = {};

  resource.getPlayerData = function() {
    return $http.get('/data/player.json');
  };

  return resource;
}]);
