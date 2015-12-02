webgarden.controller('PlantCtrl', function ($scope, $state, $stateParams, plant, reports) {
  $scope.plant = plant;
  $scope.reports = reports;

  console.log('$stateParams: %s', JSON.stringify($stateParams))

  $scope.order = $stateParams.order || 'datetime';
  $scope.reverse = $stateParams.reverse || 'yes';

  $scope.refresh = function () {
    $state.go('.', {
      order: $scope.order,
      reverse: $scope.reverse
    }, { reload: true });
  };
});