// Create a main angular app module
angular
  .module('spinnerApp', [])
  .controller('AppCtrl', function($scope, loadDataService, SpinnerService) {

    $scope.init = function() {
      loadDataService.getSimpleData().then(function(data) {
        return $scope.data = data;
      });

      loadDataService.getDummyData().then(function(data) {
        return $scope.dummy = data;
      });
    };

    SpinnerService.activateController([loadDataService.getSimpleData(), loadDataService.getDummyData()]);

  });
