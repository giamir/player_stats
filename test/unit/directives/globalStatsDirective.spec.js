describe('directive: globalStats', function() {
  var compile;
  var scope;
  var directiveElem;

  beforeEach(function() {
    module('PlayerStats', function($controllerProvider) {
      $controllerProvider.register('GlobalStats', function() {
            jasmine.createSpyObj('GlobalStats', ['globalStats']);
        });
    });
  });

  beforeEach(function(){
    inject(function($compile, $rootScope){
      compile = $compile;
      scope = $rootScope.$new();
    });
    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<global-stats></global-stats>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it('should have a table element', function () {
    var tableElement = directiveElem.find('table');
    expect(tableElement.attr('class'))
      .toEqual('table table-striped');
  });

});
