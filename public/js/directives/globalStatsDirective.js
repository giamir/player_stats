(function() {

  function globalStats() {
    return {
      restrict: 'EA',
      template: [
        '<section class="col-md-8 col-lg-8 col-xl-8">',
          '<table class="table table-striped">',
            '<thead>',
              '<tr>',
                '<th>Statistic</th>',
                '<th>Season <small>(AVG)</small></th>',
                '<th>Last Match</th>',
              '</tr>',
            '</thead>',
            '<tbody>',
              '<tr ng-repeat="stat in vm.globalStats">',
                '<td>{{stat.featureName}}</td>',
                '<td>{{stat.season}}</td>',
                '<td>{{stat.lastMatch}}</td>',
              '</tr>',
            '</tbody>',
          '</table>',
        '</section>'
      ].join(''),
      controllerAs: 'vm',
      controller: 'GlobalStats'
    };
  }

  angular.module('PlayerStats')
    .directive('globalStats', globalStats);
})();
