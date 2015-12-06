webgarden.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/login");

  function requestErrorHandler(resource) {
    return function (error) {
      console.log(resource + ': %s', error);
      throw error;
    };
  }

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.html",
      controller: 'LoginCtrl',
      resolve: {
        user: function resolveUser(server, $http, $state, $rootScope) {
          return $http.get(server.baseUrl + '/session')
            .then(function () { $state.go('user.plants') })
            .catch(R.empty);
        }
      }
    })
    .state('user', {
      abstract: true,
      templateUrl: 'partials/user.html',
      controller: 'UserCtrl',
      resolve: {
        user: function resolveUser(server, $http, $state, $rootScope) {
          return $http.get(server.baseUrl + '/session')
            .then(R.prop('data'))
            .catch(function () { $state.go('login') });
        }
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
            .catch(requestErrorHandler('plants'));
        },
        plant: function (server, $http, $state, $stateParams) {
          if ($stateParams.id) {
            return $http.get(server.baseUrl + '/plants/' + $stateParams.id)
              .then(R.prop('data'))
              .catch(requestErrorHandler('plant'));
          }

        },
        reports: function (server, $http, $state, $stateParams) {
          if ($stateParams.id) {
            return $http.get(server.baseUrl + '/plants/' + $stateParams.id + '/reports')
            .then(R.prop('data'))
            .catch(requestErrorHandler('reports'));
          }
        }
      }
    })
    .state('logout', {
      controller: function (server, $http, $state, $rootScope) {
        $http.delete(server.baseUrl + '/session')
          .then(function () { $state.go('login') })
          .then(function () { delete $rootScope.user });
      }
    });

});
