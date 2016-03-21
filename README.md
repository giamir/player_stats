# Player Statistics [![Build Status](https://travis-ci.org/giamir/player_stats.svg?branch=master)](https://travis-ci.org/giamir/player_stats) [![Coverage Status](https://coveralls.io/repos/github/giamir/player_stats/badge.svg?branch=master)](https://coveralls.io/github/giamir/player_stats?branch=master)
<br>

![screenshot](http://i.imgur.com/grRbNYt.png)

## Task

Attached is a [JSON file](https://github.com/giamir/player_stats/blob/master/public/data/player.json) of a player from this season's Premier League. Included are 4 matches (match weeks 3-6) with each match split up into 5 minute segments of stats that the player has recorded during the game.

Make a single web page to visualise the data in any format (graphs, tables etc.).

## How I approached this task

The application has been built with AngularJS, Bootstrap and Chart.js to implement the graphs. I have used NodeJS and ExpressJS to serve the application.

I decided to use AngularJS for the front end framework as I believe it helps respect [SOLID principles](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)) and keeps the code clean.

I generally follow a TDD methodology to implement application features. I wrote a failing feature test in protractor, then a new matching failing unit test. I then wrote code to fix the failing unit test which would change the error for the feature test. Repeating this process allowed me to complete the feature.<br>
It was the first time I used the ChartJS library so I decided to spike the code and then come back to test every feature implemented. I then refactored my code.

### Scaffold

```
public
├── css
│   └── global.css
├── data
│   └── player.json
├── js
│   ├── app.js
│   ├── controllers
│   │   ├── globalStatsController.js
│   │   └── singleMatchStatsController.js
│   └── factories
│       ├── elaborateDataFactory.js
│       ├── refineDataFactory.js
│       └── resourceFactory.js
├── libs
│   └── [all the app dependencies]
└── views
    ├── index.html
    └── partials
        ├── global-stats.html
        └── match-stats.html
```

**Factories**
* Resource *is responsible for retrieving the JSON file.*
* ElaborateData *is responsible for handling operations on JSON objects. Also, the arithmetic logic.*
* RefineData *is responsible for transforming JSON objects in an "easy to handle" format for the controllers.*

**Controllers**
* GlobalStats *is responsible for displaying global statistics using the view global-stats.html.*
* SingleMatchStats *is responsible for dynamically focusing the preferred match and
displaying its statistics using the view match-stats.html.*

If you want to have a deep understanding of the business logic implemented, please
follow [this link](https://github.com/giamir/player_stats/tree/master/test/unit) where all tests cases are located.


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
