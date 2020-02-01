app.controller('totalctrl',['$scope', '$http', '$localStorage', function($scope, $http, $localStorage){
    $scope.ready=$localStorage.userData;
    $http.get('http://localhost:3004/v1/totals/').then(function(response){
        console.log(response);
        $localStorage.testm=response.data.data;
        $scope.some=response.data.data;
        console.log($localStorage.testm.length);
        $scope.totalM=$localStorage.testm.length;
        console.log($scope.totalM);
    })
}])