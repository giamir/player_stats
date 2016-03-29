var homepage = {
  url: 'http://localhost:8080/',

  get: function() {
    browser.get(this.url);
  },

  getNameFirstGlobalStat: function() {
    return element.all(by.repeater('stat in vm.globalStats'))
    .then(function(elems) {
      return elems[0].element(by.binding('stat.featureName')).getText();
     });
   },

  clickLastSingleMatchLink: function() {
    return element.all(by.repeater('mw in ctrl.matchWeekKeys'))
    .then(function(elems) {
      return elems[elems.length-1].element(by.binding('mw')).click();
    });
  },

  getLastSingleMatchAlias: function() {
    return element.all(by.repeater('mw in ctrl.matchWeekKeys'))
    .then(function(elems) {
      return elems[elems.length-1].element(by.binding('mw')).getText();
    });
  },

  getSingleMatchDisplayedAlias: function() {
    return element(by.binding('ctrl.currentMatchWeekKey')).getText();
  },

  clickLastStatisticLink: function() {
    return element.all(by.repeater('navStat in ctrl.singleMatchStats'))
    .then(function(elems) {
      return elems[elems.length-1].element(by.binding('navStat.featureName')).click();
    });
  },

  getLastStatisticAlias: function() {
    return element.all(by.repeater('navStat in ctrl.singleMatchStats'))
    .then(function(elems) {
      return elems[elems.length-1].element(by.binding('navStat.featureName')).getText();
    });
  },

  getStatisticDisplayedAlias: function() {
    return element.all(by.repeater('navStat in ctrl.singleMatchStats'))
    .filter(function(el, index) {
      return el.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf('active') !== -1;
      });
    }).getText();
  }
};

module.exports = homepage;
