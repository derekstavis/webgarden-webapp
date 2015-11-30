webgarden.controller('PlantsCtrl', function ($scope, $state, server, $http, plants) {
  console.log(plants);
  $scope.plants = plants;
  $scope.newPlant = {};
  $scope.createPlant = function () {
    $http.post(server.baseUrl + '/plants', $scope.newPlant)
      .then(R.partial($state.reload, ['user.plants']));
  };
});