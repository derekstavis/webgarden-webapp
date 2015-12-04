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
      controller: 'UserCtrl',
      resolve: {
        user: resolveUser
      }
    })
    .state('user.plants', {
      url: "/plants/:id?{order:[a-z]}&{reverse:bool}",
      views: {
        'list': {
          templateUrl: "partials/plants.html",
          controller: 'PlantsCtrl'
        },
        'detail': {
          templateUrl: "partials/plant.html",
          controller: 'PlantCtrl'
        }
      },
      resolve: {
        plants: function (server, $http, $state, $rootScope) {
          return $http.get(server.baseUrl + '/plants')
            .then(R.prop('data'))
            .catch(R.partial(console.log, ['plants: %s']));
        },
        plant: function (server, $http, $state, $stateParams) {
          if ($stateParams.id) {
            return $http.get(server.baseUrl + '/plants/' + $stateParams.id)
              .then(R.prop('data'))
              .catch(R.partial(console.log, ['plant: %s']));
          }

        },
        reports: function (server, $http, $state, $stateParams) {
          if ($stateParams.id) {
            return $http.get(server.baseUrl + '/plants/' + $stateParams.id + '/reports')
            .then(R.prop('data'))
            .catch(R.partial(console.log, ['reports: %s']));
          }
        }
      }
    })
    .state('logout', {
      controller: function (server, $http, $state, $rootScope) {
        $http.delete(server.baseUrl + '/session')
          .then(R.partial($state.go, ['login', undefined, undefined]))
          .then(function () { delete $rootScope.user });
      }
    });

});
