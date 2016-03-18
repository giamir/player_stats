var playerStats = angular.module('PlayerStats', ['chart.js']);

playerStats.config(function (ChartJsProvider) {
  ChartJsProvider.setOptions({
    colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
    responsive: true,
    animation: true
  });
});
