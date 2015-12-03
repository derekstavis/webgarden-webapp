webgarden.controller('PlantCtrl', function ($scope, $state, $stateParams, plant, reports) {
  $scope.plant = plant;
  $scope.reports = reports;

  $scope.order = $stateParams.order || 'datetime';
  $scope.reverse = $stateParams.reverse || false;

  $scope.refresh = function () {
    $state.go('.', {
      order: $scope.order,
      reverse: $scope.reverse
    }, { reload: true });
  };
});