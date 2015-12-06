webgarden.controller('LoginCtrl', function (server, $scope, $state, $http, user, $mdDialog) {
  $scope.user = {};

  function gotoPlants() {
    $state.go('user.plants');
  }

  function cleanFields() {
    $scope.user.user = '';
    $scope.user.pass = '';
  }

  function loginError() {
    console.log(event)
    $mdDialog.show(
      $mdDialog.confirm()
        .title('Login Error')
        .ok('Try Again'))
      .then(cleanFields);
  }

  $scope.login = function (event) {
    $http.post(server.baseUrl + '/session', $scope.user)
      .then(R.prop('data'))
      .then(gotoPlants)
      .catch(loginError);
  }
});
