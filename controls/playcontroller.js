app.controller('playctrl',['$scope', '$http', '$localStorage', function($scope, $http, $localStorage){
    $scope.ready=$localStorage.userData;
    $http.get('http://localhost:3004/v1/play/').then(function(response){
        console.log(response.data.data);
        $scope.some=response.data.data;
    })
}])