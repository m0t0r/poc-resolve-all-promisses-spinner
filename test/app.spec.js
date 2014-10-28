describe('AppCtrl', function() {
  'use strict';

  var $httpBackend, $scope, loadDataService, mockData, getAppCtrl;

  beforeEach(module('spinnerApp'));

  mockData = {
    fname: 'Shelly',
    lname: 'Connor',
    company: 'Martinez Industries',
    email: 'EHernandez@sollicitudin.net'
  };

  beforeEach(inject(function($injector, $rootScope, $controller) {
    $scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    loadDataService = $injector.get('loadDataService');

    getAppCtrl = function() {
      $controller('AppCtrl', {
        '$scope': $scope,
        'loadDataService': loadDataService
      });
    };
  }));

  it('should be able to load dummy data', function() {
    $httpBackend.expectJSONP('http://www.filltext.com/?callback=JSON_CALLBACK&rows=10&fname={firstName}&lname={lastName}&company={business}&email={email}&delay=3')
      .respond(mockData);
    getAppCtrl();
    $httpBackend.flush();

    expect($scope.data).toBeDefined();
    expect($scope.data.fname).toBe('Shelly');
  });
});
