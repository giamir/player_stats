(function() {
  
  function Resource($http) {
    var resource = {};

    resource.getPlayerData = function() {
      return $http.get('/data/player.json');
    };

    return resource;
  }

  Resource.$inject = ['$http'];

  angular.module('PlayerStats')
    .factory('Resource', Resource);
})();
