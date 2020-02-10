// controller.js
app.controller("myctrl",['$scope', '$state', '$http', '$localStorage','URL', function($scope, $state, $http, $localStorage, URL){
    $scope.submit=function(){
        var emp={};
        emp.name=$scope.username;
        emp.password=$scope.password;
        $http.post(URL.API+'login/',emp).then(function(response){
            $(window).on('load', function() {
                $('#loading').hide();
             });
            console.log(response.data.val);    
        if(response.data.status==true){
                $localStorage.value=response.data.val;
                console.log($localStorage.value);
            window.location.href = URL.froentend+"dashboard";
            $(window).on('load', function() {
                $('#loading').hide();
             });
            }
        })
    }
    $scope.register=function(){
        window.location.href=URL.froentend+"register";
        $(window).on('load', function() {
            $('#loading').hide();
         });
    }
    $scope.forgotpass=function(){
        window.location.href=URL.froentend+"forgotpass";
        $(window).on('load', function() {
            $('#loading').hide();
         });
        console.log("came forgot")
    }
}]);


