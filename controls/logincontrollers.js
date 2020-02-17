// controller.js
app.controller("myctrl", ['$scope', '$state', '$http', '$localStorage', 'URL', function ($scope, $state, $http, $localStorage, URL) {
    $scope.loading = true;
    $scope.submit = function () {
        var emp = {};
        emp.name = $scope.username;
        emp.password = $scope.password;
        $http.post(URL.API + 'login/', emp).then(function (response) {
            $scope.loading = false;
            console.log(response.data.val);
            if (response.data.status == true) {
                $localStorage.value = response.data.val;
                console.log($localStorage.value);
                $scope.loading = true;
                window.location.href = URL.froentend + "dashboard";
                $scope.loading = false
            }
        })
    }
    $scope.register = function () {
        $scope.loading = true;
        window.location.href = URL.froentend + "register";
        $scope.loading = false
    }
    $scope.forgotpass = function () {
        $scope.loading = true;
        window.location.href = URL.froentend + "forgotpass";
        $scope.loading = false;
        console.log("came forgot")
    }
}]);


