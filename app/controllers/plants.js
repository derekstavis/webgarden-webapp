webgarden.controller('PlantsCtrl', function ($scope, $state, server, $http, plants) {
  console.log(plants);
  $scope.plants = plants;
  $scope.newPlant = {};
  $scope.createPlant = function () {
    $http.post(server.baseUrl + '/plants', $scope.newPlant)
      .then(R.partial($state.reload, ['user.plants']));
  };
  $scope.removePlant = function (plant) {
    $http.delete(server.baseUrl + '/plants/' + plant.id)
      .then(R.partial($state.reload, ['user.plants']));
  }
});