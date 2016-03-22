playerStats.factory('RefineData',['ElaborateData', function(ElaborateData) {
  var refineData = {};

  refineData.getGlobalStats = function(matchesStatsObj) {
    var seasonStatsObj = ElaborateData.getSeasonStatsObj(matchesStatsObj);
    var lastMatchGlobalStatsObj = ElaborateData.getLastMatchGlobalStatsObj(matchesStatsObj);
    var globalStats = [];
    angular.forEach(seasonStatsObj, function(value, feature) {
      var statistic = {};
      statistic.alias = feature;
      statistic.featureName = convertAliasToFeatureName(feature);
      statistic.season = addUnitToValue(value, feature);
      statistic.lastMatch = addUnitToValue(lastMatchGlobalStatsObj[feature], feature);
      globalStats.push(statistic);
    });
    return globalStats;
  };

  refineData.getSingleMatchStats = function(matchStatsObj) {
    var matchGlobalStatsObj = ElaborateData.getMatchGlobalStatsObj(matchStatsObj);
    var singleMatchStats = [];
    angular.forEach(matchGlobalStatsObj, function(value, feature) {
      var statistic = {};
      statistic.alias = feature;
      statistic.featureName = convertAliasToFeatureName(feature);
      statistic.value = addUnitToValue(value, feature);
      singleMatchStats.push(statistic);
    });
    return singleMatchStats;
  };

  refineData.getGraphData = function(matchStatsObj, stat) {
    return ElaborateData.reduceObjToArray(matchStatsObj)[stat];
  };

  refineData.getGraphLabels = function(matchStatsObj, stat) {
    var graphLabels = [];
    for(var i = 0; i < refineData.getGraphData(matchStatsObj, stat).length; i++) {
      graphLabels.push(i * 5);
    }
    return graphLabels;
  };

  function convertAliasToFeatureName(feature) {
    var str = feature.split('_').join(' ');
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function addUnitToValue(value, feature) {
    if(feature.indexOf('distance') > -1) { return value.toFixed(0) + ' m'; }
    if(feature.indexOf('_speed') > -1) { return value.toFixed(2) + ' km/h'; }
    return value.toFixed(0);
  }

  return refineData;
}]);
