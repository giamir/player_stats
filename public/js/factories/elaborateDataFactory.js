playerStats.factory('ElaborateData',[function() {
  var elaborateData = {};

  elaborateData.seasonStatsObj = function(matchesStatsObj) {
    var matchesGlobalStatsObj = elaborateData.matchesGlobalStatsObj(matchesStatsObj);
    var matchesStatsObjArray = elaborateData.matchStatsObjArray(matchesGlobalStatsObj);
    var seasonStatsObj = matchesStatsObjArray;
    angular.forEach(seasonStatsObj, function(array, stat) {
      seasonStatsObj[stat] = elaborateData._calculateAVG(array);
    })
    return seasonStatsObj;
  };

  elaborateData.lastMatchGlobalStatsObj = function(matchesStatsObj) {
    var lastMatchStatsObj = matchesStatsObj[Object.keys(matchesStatsObj)[0]];
    var lastMatchStatsObjArray = elaborateData.matchStatsObjArray(lastMatchStatsObj);
    return elaborateData.matchGlobalStatsObj(lastMatchStatsObjArray);
  };

  elaborateData.matchesGlobalStatsObj = function(matchesStatsObj) {
    var matchesGlobalStatsObj = {};
    angular.forEach(matchesStatsObj, function(matchStatsObj, match) {
      var matchStatsObjArray = elaborateData.matchStatsObjArray(matchStatsObj);
      var matchGlobalStatsObj = elaborateData.matchGlobalStatsObj(matchStatsObjArray);
      matchesGlobalStatsObj[match] = matchGlobalStatsObj;
    })
    return matchesGlobalStatsObj;
  };

  elaborateData.matchGlobalStatsObj = function(matchStatsObjArray) {
    var matchGlobalStatsObj = matchStatsObjArray;
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

  elaborateData.matchStatsObjArray = function(matchStatsObj) {
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
    var sum = elaborateData._calculateSUM(array)
    return (sum / array.length);
  };

  elaborateData._calculateSUM = function(array) {
    return array.reduce(function(a, b) { return a + b; });
  };

  elaborateData._findMAX = function(array) {
    return Math.max.apply(Math, array)
  };

  return elaborateData;
}]);
