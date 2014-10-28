// A simple service which loads data
angular
  .module('spinnerApp')
  .factory('loadDataService', function($http, $q) {

    return {
      getSimpleData: getSimpleData,
      getDummyData: getDummyData
    };

    /**
     * Generic method to load data with promises
     * Simulation of 3 seconds delay.
     */
    function getSimpleData() {
      var deferred = $q.defer();
      $http.jsonp('http://www.filltext.com/?callback=JSON_CALLBACK&rows=10&fname={firstName}&lname={lastName}&company={business}&email={email}&delay=3')
        .success(function(data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    }

    function getDummyData() {
      var deferred = $q.defer();
      $http.jsonp('http://www.filltext.com/?callback=JSON_CALLBACK&rows=10&company={business}&email={email}&delay=1')
        .success(function(data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    }

  });
