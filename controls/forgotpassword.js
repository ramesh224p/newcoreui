app.controller('searchctrl', ['$http', '$scope', '$window', 'URL', function ($http, $scope, $window, URL) {
    $scope.searchid = function () {
        console.log(URL.API)
        $scope.loading=true;
        $http.get(URL.API + 'forgotpass?email=' + $scope.emailid).then(function (response) {
            $scope.loading=false;
            console.log(response.data.data[0]);
            if (response.data.status == true) {
                console.log("ok");
            } else {
                console.log('error');
            }
        })
    }
}])