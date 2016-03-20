playerStats.factory('ElaborateData',[function() {
  var elaborateData = {};

  elaborateData.getSeasonStatsObj = function(matchesStatsObj) {
    var matchesGlobalStatsObj = elaborateData.getMatchesGlobalStatsObj(matchesStatsObj);
    var seasonStatsObj = elaborateData.reduceObjToArray(matchesGlobalStatsObj);
    angular.forEach(seasonStatsObj, function(array, stat) {
      seasonStatsObj[stat] = elaborateData._calculateAVG(array);
    });
    return seasonStatsObj;
  };

  elaborateData.getLastMatchGlobalStatsObj = function(matchesStatsObj) {
    var lastMatchStatsObj = matchesStatsObj[Object.keys(matchesStatsObj)[0]];
    return elaborateData.getMatchGlobalStatsObj(lastMatchStatsObj);
  };

  elaborateData.getMatchesGlobalStatsObj = function(matchesStatsObj) {
    var matchesGlobalStatsObj = {};
    angular.forEach(matchesStatsObj, function(matchStatsObj, match) {
      matchesGlobalStatsObj[match] = elaborateData.getMatchGlobalStatsObj(matchStatsObj);
    });
    return matchesGlobalStatsObj;
  };

  elaborateData.getMatchGlobalStatsObj = function(matchStatsObj) {
    var matchGlobalStatsObj = elaborateData.reduceObjToArray(matchStatsObj);
    angular.forEach(matchGlobalStatsObj, function(array, stat) {
      switch(stat) {
        case 'avg_speed':
          matchGlobalStatsObj[stat] = elaborateData._calculateAVG(array);
          break;
        case 'max_speed':
          matchGlobalStatsObj[stat] = elaborateData._findMAX(array);
          break;
        default:
          matchGlobalStatsObj[stat] = elaborateData._calculateSUM(array);
      }
    })
    return matchGlobalStatsObj;
  };

  elaborateData.reduceObjToArray = function(matchStatsObj) {
    var matchStatsObjArray = {};
    angular.forEach(matchStatsObj, function(partialStatsObj) {
      angular.forEach(partialStatsObj, function(value, stat) {
        if (!matchStatsObjArray[stat]) { matchStatsObjArray[stat] = []; }
        matchStatsObjArray[stat].push(+value);
      });
    });
    return matchStatsObjArray;
  };

  elaborateData._calculateAVG = function(array) {
    var sum = elaborateData._calculateSUM(array);
    return (sum / array.length);
  };

  elaborateData._calculateSUM = function(array) {
    return array.reduce(function(a, b) { return a + b; });
  };

  elaborateData._findMAX = function(array) {
    return Math.max.apply(Math, array);
  };

  return elaborateData;
}]);
