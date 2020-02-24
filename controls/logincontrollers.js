// controller.js


// app.service('APIInterceptor', function($rootScope, URL) {
//     console.log("came to acess token")
//     var service = this;
//     if(JSON.parse(window.localStorage.getItem('ngStorage-value'))){
//         service.request = function(config) {
//             console.log("config")
//         //var currentUser = UserService.getCurrentUser(),
//         var access_token=JSON.parse(window.localStorage.getItem('ngStorage-value').token);
//             //access_token = currentUser ? currentUser.access_token : null;
//         console.log("config")
//         console.log("err",access_token);
//         if (access_token) {
//             config.headers.authorization = access_token;
//         }
//             console.log(config);
//             return config || $q.when(config);  
//         }
//         service.responseError = function(response) {
//         if (response.status === 401) {
//             $rootScope.$broadcast('unauthorized');
//             window.location.href='http://127.0.0.1:8080/#!/login';
//         }
//             return response ;
//         }
//     }else{
//         window.location.href="http://127.0.0.1:8080/#!/login"
//     }
// })

app.controller("myctrl", ['$scope', '$state', '$http', '$localStorage', 'URL', function ($scope, $state, $http, $localStorage, URL) {
    $scope.loading = true;
    
    $scope.submit = function () {
        var emp = {};
        emp.name = $scope.username;
        emp.password = $scope.password;
        $http.post(URL.API + 'login/', emp).then(function (response) {
            $scope.loading = false;
            
            if (response.data.status == true) {
                $localStorage.value = response.data.status;
                $localStorage.token = response.data.val.token;
                $scope.loading = true;
                console.log($localStorage.token);    
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


