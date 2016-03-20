module.exports = function(config) {
  config.set({
    basePath: '../../',
    frameworks: ['jasmine'],
    files: [
      'public/libs/Chart.js/Chart.min.js',
      'public/libs/angular/angular.min.js',
      'public/libs/angular-chart.js/dist/angular-chart.js',
      'public/libs/angular-route/angular-route.js',
      'public/libs/angular-mocks/angular-mocks.js',
      'public/js/**/*.js',
      'test/unit/mocks/**/*.js',
      'test/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'public/js/**/*.js': ['coverage']
    },
    reporters: ['spec', 'coverage', 'coveralls'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    singleRun: true,
    coverageReporter: {
        type: 'lcov',
        dir: 'coverage/'
    }
  });
};
