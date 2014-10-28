angular
  .module('spinnerApp')
  .factory('SpinnerService', function($q) {
    var status = false;
    return {
      activateController: activateController
    };

    function activateController(promises) {
      return $q.all(promises).then(function(data) {
        console.log('loadedData', data);
      });
    };

  });
