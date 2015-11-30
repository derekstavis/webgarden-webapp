webgarden.controller('LoginCtrl', function (server, $scope, $state, $http, user) {
  $scope.user = {};

  var gotoPlants = R.partial($state.go, ['user.plants', undefined, undefined]);

  $scope.login = function () {
    $http.post(server.baseUrl + '/session', $scope.user)
      .then(R.prop('data'))
      .then(gotoPlants)
      .catch(console.log);
  }

  if (user) {
    gotoPlants();
  }

});
