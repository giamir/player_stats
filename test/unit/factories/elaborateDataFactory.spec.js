describe('factory: ElaborateData', function() {
  var elaborateData;

  var matchObj = {
    "1-0": {
    "distance": 10,
    "sprint_distance": 3,
    "highspeed_runs_distance": 3,
    "max_speed": "23",
    "sprints": 3,
    "highspeed_runs": 13,
    "avg_speed": 6
    },
    "1-5": {
    "distance": 10,
    "sprint_distance": 2,
    "highspeed_runs_distance": 3,
    "max_speed": "26",
    "sprints": 2,
    "highspeed_runs": 7,
    "avg_speed": 4
    }
  }

  var matchObj2 = {
    "1-0": {
    "distance": 20,
    "sprint_distance": 3,
    "highspeed_runs_distance": 3,
    "max_speed": "23",
    "sprints": 3,
    "highspeed_runs": 13,
    "avg_speed": 6
    },
    "1-5": {
    "distance": 20,
    "sprint_distance": 2,
    "highspeed_runs_distance": 3,
    "max_speed": "26",
    "sprints": 2,
    "highspeed_runs": 7,
    "avg_speed": 4
    }
  }

  var matchArrayObj = {
    "distance": [10, 10],
    "sprint_distance": [3, 2],
    "highspeed_runs_distance": [3, 3],
    "max_speed": [23, 26],
    "sprints": [3, 2],
    "highspeed_runs": [13, 7],
    "avg_speed": [6, 4]
  }

  var matchGlobalObj = {
    "distance": 20,
    "sprint_distance": 5,
    "highspeed_runs_distance": 6,
    "max_speed": 26,
    "sprints": 5,
    "highspeed_runs": 20,
    "avg_speed": 5
  }

  var matchGlobalObj2 = {
    "distance": 40,
    "sprint_distance": 5,
    "highspeed_runs_distance": 6,
    "max_speed": 26,
    "sprints": 5,
    "highspeed_runs": 20,
    "avg_speed": 5
  }

  var matchesObj = {
    mw1: matchObj,
    mw2: matchObj2
  }

  var matchesGlobalObj = {
    mw1: matchGlobalObj,
    mw2: matchGlobalObj2
  }

  var seasonObj = {
    "distance": 30,
    "sprint_distance": 5,
    "highspeed_runs_distance": 6,
    "max_speed": 26,
    "sprints": 5,
    "highspeed_runs": 20,
    "avg_speed": 5
  }

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
