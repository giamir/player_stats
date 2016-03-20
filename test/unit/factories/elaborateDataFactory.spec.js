describe('factory: ElaborateData', function() {
  var elaborateData;

  beforeEach(module('PlayerStats'));

  beforeEach(inject(function(ElaborateData) {
    elaborateData = ElaborateData;
  }));

  describe('#reduceObjToArray', function() {
    it('returns an hash with keys stats name and values array of stats', function() {
      expect(elaborateData.reduceObjToArray(matchObj)).toEqual(matchArrayObj);
    });
  });

  describe('#getMatchGlobalStatsObj', function() {
    it('returns an hash with keys stats name and values global stats of the match', function() {
      expect(elaborateData.getMatchGlobalStatsObj(matchObj)).toEqual(matchGlobalObj);
    });
  });

  describe('#getMatchesGlobalStatsObj', function() {
    it('returns an hash with keys match alias and values match global stats object', function() {
      expect(elaborateData.getMatchesGlobalStatsObj(matchesObj)).toEqual(matchesGlobalObj);
    });
  });

  describe('#getLastMatchGlobalStatsObj', function() {
    it('returns an hash with keys stats name and values global stats of the last match', function() {
      expect(elaborateData.getLastMatchGlobalStatsObj(matchesObj)).toEqual(matchGlobalObj);
    });
  });

  describe('#getSeasonStatsObj', function() {
    it('returns an hash with keys stats name and values global stats of the entire season', function() {
      expect(elaborateData.getSeasonStatsObj(matchesObj)).toEqual(seasonObj);
    });
  });
});
