// controller.js
app.controller("myctrl",['$scope', '$state', '$http', '$localStorage', function($scope, $state, $http, $localStorage){
    $scope.submit=function(){
        var emp={};
        emp.name=$scope.username;
        emp.password=$scope.password;
        $http.post('http://localhost:3004/v1/login/',emp).then(function(response){
            console.log(response.data.val);    
        if(response.data.status==true){
                $localStorage.value=response.data.val;
                console.log($localStorage.value);
            window.location.href = "http://127.0.0.1:8080/#!/dashboard";
            }
        })
    }
}]);


