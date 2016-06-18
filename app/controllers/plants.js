webgarden.controller('PlantsCtrl', function ($scope, $state, server, $http, plants, plant, $mdDialog) {
  if (!plant && plants.length > 0) {
    $state.go('user.plants', { id: plants[0].id });
  }

  $scope.plants = plants;
  $scope.newPlant = {};
  $scope.createPlant = function () {
    $http.post(server.baseUrl + '/plants', $scope.newPlant)
      .then(R.partial($state.reload, ['user.plants']));
  };
  $scope.removePlant = function (plant, ev) {
    $mdDialog.show(
      $mdDialog.confirm()
        .targetEvent(ev)
        .title('Would you like to delete this plant?')
        .ok('Remove Plant')
        .cancel("Cancel"))
      .then(R.partial($http.delete, [server.baseUrl + '/plants/' + plant.id]))
      .then(R.partial($state.reload, ['user.plants']));
  }
});