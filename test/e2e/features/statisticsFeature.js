var homepage = require('../pages/home.page.js');

describe('Displaying Player Statistics', function() {
  describe('The user should be able to', function() {
    beforeEach(function() {
      homepage.get();
    });

    it('see the global stats of the player', function() {
      expect(homepage.getNameFirstGlobalStat()).toEqual('Distance');
    });

    it('change the match stats displayed clicking the button of the match wanted', function() {
      homepage.clickLastSingleMatchLink();
      expect(homepage.getSingleMatchDisplayedAlias())
      .toEqual(homepage.getLastSingleMatchAlias());
    });

    it('change the statistic displayed in the graph clicking the button of the statistic wanted', function() {
      homepage.clickLastStatisticLink();
      expect(homepage.getStatisticDisplayedAlias())
      .toContain(homepage.getLastStatisticAlias());
    });
  });
});
