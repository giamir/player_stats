playerStats.factory('RefineData',['ElaborateData', function(ElaborateData) {
  var refineData = {};

  refineData.globalStats = function(matchesStatsObj) {
    var seasonStatsObj = ElaborateData.seasonStatsObj(matchesStatsObj);
    var lastMatchGlobalStatsObj = ElaborateData.lastMatchGlobalStatsObj(matchesStatsObj);
    var globalStats = [];
    angular.forEach(seasonStatsObj, function(value, feature) {
      var statistic = {};
      statistic.alias = feature;
      statistic.featureName = refineData._featureAliasToFeatureName(feature);
      statistic.global = refineData._addUnitToValue(value, feature);
      statistic.lastMatch = refineData._addUnitToValue(lastMatchGlobalStatsObj[feature], feature);
      globalStats.push(statistic);
    })
    return globalStats;
  };

  refineData.singleMatchStats = function(matchStatsObj) {
    var matchGlobalStatsObj = ElaborateData.matchGlobalStatsObj(matchStatsObj);
    var singleMatchStats = [];
    angular.forEach(matchGlobalStatsObj, function(value, feature) {
      var statistic = {};
      statistic.alias = feature;
      statistic.featureName = refineData._featureAliasToFeatureName(feature);
      statistic.value = refineData._addUnitToValue(value, feature);
      singleMatchStats.push(statistic);
    })
    return singleMatchStats;
  };

  refineData.graphStats = function(matchStatsObj, stat) {
    return ElaborateData.reduceObjToArray(matchStatsObj)[stat];
  };

  refineData._featureAliasToFeatureName = function(feature) {
    var str = feature.split('_').join(' ');
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  refineData._addUnitToValue = function(value, feature) {
    if(feature.indexOf('distance') > -1) { return value.toFixed(0) + ' m' }
    if(feature.indexOf('_speed') > -1) { return value.toFixed(2) + ' km/h' }
    return value.toFixed(0);
  };

  return refineData;
}]);
