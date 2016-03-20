# Player Statistics [![Build Status](https://travis-ci.org/giamir/player_stats.svg?branch=master)](https://travis-ci.org/giamir/player_stats) [![Coverage Status](https://coveralls.io/repos/github/giamir/player_stats/badge.svg?branch=master)](https://coveralls.io/github/giamir/player_stats?branch=master)

## Task

Attached is a [JSON file](https://github.com/giamir/player_stats/blob/master/public/data/player.json) of a player from this season's Premier League. Included are 4 matches (match weeks 3-6) with each match split up into 5 minute segments of stats that the player has recorded during the game.

Make a single web page to visualise the data in any format (graphs, tables etc.).

## How I approached this task

Not available yet

## Installation Instructions

The app has been deployed on heroku and you can try it here:
>[http://player-stats.herokuapp.com](http://player-stats.herokuapp.com)

You will require NodeJS (with npm) to make the application function locally. To run the test suites you will also require Java.

Clone from github and move into directory

```
$ git@github.com:giamir/player_stats.git
$ cd player_stats
```

Install all dependencies for the application and start the server

```
$ npm install
$ npm start
```

You can now visit the application in the browser at `http://localhost:8080/`

## Technologies

* HTML5
* Bootstrap 3
* JavaScript
* Chart.js
* AngularJS
* Karma (unit testing framework)
* Protractor (feature testing framework)

## Running Tests

To run the test suite you will need to have the node server running.

```
$ npm start
```

To run the full suite

```
$ npm test
```

Or to run individual components (unit and feature test)

```
$ grunt karma
$ grunt e2e
```

## Contributors

[Giamir Buoncristiani](https://github.com/giamir)
