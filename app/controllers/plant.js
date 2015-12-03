webgarden.controller('PlantCtrl', function ($scope, $state, $stateParams, plant, reports) {
  $scope.plant = plant;
  $scope.reports = reports;

  $scope.order = $stateParams.order || 'datetime';
  $scope.reverse = $stateParams.reverse || false;

  $scope.refresh = function () {
    $state.go('.', {
      order: $scope.order,
      reverse: $scope.reverse
    }, { reload: true });
  };

  $scope.options = {
    chart: {
      type: 'lineChart',
      height: 250,
      margin : {
        top: 20,
        right: 40,
        bottom: 40,
        left: 40
      },
      x: R.pipe(R.prop('read_at'), Date.parse),
      y: R.pipe(R.prop('value'), parseFloat),
      duration: 0,
      xAxis: {
        tickFormat: R.pipe(
          function (d) { return new Date(d) },
          d3.time.format('%d/%m/%y %H:%M'))
      },
      yAxis: {
        tickFormat: d3.format('.3f')
      }
    }
  };

  $scope.chartData = [
    {
      key: "Moisture",
      values: reports,
      area: true
    }
  ];

});