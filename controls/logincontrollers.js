// controller.js
app.controller("myctrl",['$scope', '$state', '$http', '$localStorage','URL', function($scope, $state, $http, $localStorage, URL){
    $scope.submit=function(){
        var emp={};
        emp.name=$scope.username;
        emp.password=$scope.password;
        $http.post(URL.API+'login/',emp).then(function(response){
            console.log(response.data.val);    
        if(response.data.status==true){
                $localStorage.value=response.data.val;
                console.log($localStorage.value);
            window.location.href = URL.froentend+"dashboard";
            }
        })
    }
}]);


