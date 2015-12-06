webgarden.controller('LoginCtrl', function (server, $scope, $state, $http, user) {
  $scope.user = {};

  function gotoPlants() {
    $state.go('user.plants');
  }

  $scope.login = function () {
    $http.post(server.baseUrl + '/session', $scope.user)
      .then(R.prop('data'))
      .then(gotoPlants);
  }
});
