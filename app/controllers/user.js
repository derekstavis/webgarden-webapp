webgarden.controller('UserCtrl', function ($state, $scope, user) {
  $scope.user = user;
  $scope.$on('$stateChangeStart', function(event, toState) {
    if (toState.resolve) {
      $scope.loading = true;
    }
  });
  $scope.$on('$stateChangeSuccess', function(event, toState) {
    if (toState.resolve) {
      $scope.loading = false;
    }
  });
});