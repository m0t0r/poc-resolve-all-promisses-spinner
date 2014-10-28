// Create a main angular app module
angular
  .module('spinnerApp', [])
  .controller('AppCtrl', function($scope, loadDataService) {

    loadDataService.getSimpleData().then(function(data) {
      $scope.data = data;
    })

  });
