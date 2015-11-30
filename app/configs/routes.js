webgarden.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/login");

  function resolveUser (server, $http, $state, $rootScope) {
    return $http.get(server.baseUrl + '/session')
      .then(R.prop('data'))
      .catch(R.empty);
  }

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.html",
      controller: 'LoginCtrl',
      resolve: {
        user: resolveUser
      }
    })
    .state('user', {
      abstract: true,
      templateUrl: 'partials/user.html',
      resolve: {
        user: resolveUser
      },
      controller: 'UserCtrl'
    })
    .state('user.plants', {
      url: "/plants",
      templateUrl: "partials/plants.html",
      controller: 'PlantsCtrl',
      resolve: {
        plants: function (server, $http, $state, $rootScope) {
          return $http.get(server.baseUrl + '/plants')
            .then(R.prop('data'))
            .catch(R.partial($state.go, ['login', undefined, undefined]));
        }
      }
    })
    .state('logout', {
      url: "/plants",
      templateUrl: "partials/plants.html",
      controller: function (server, $http, $state, $rootScope) {
        $http.delete(server.baseUrl + '/session')
          .then(R.partial($state.go, ['login', undefined, undefined]))
          .then(function () { delete $rootScope.user });
      }
    });

});
