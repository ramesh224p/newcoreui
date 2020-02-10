app.controller('searchctrl',['$http', '$scope', '$window', 'URL', function($http, $scope, $window, URL){
    $scope.searchid=function(){
        console.log(URL.API)
        $http.get(URL.API+'forgotpass?email='+$scope.emailid).then(function(response){
            $(window).on('load', function() {
                $('#loading').hide();
             });
            console.log(response.data.data[0]);
            if(response.data.status==true){
                // var pass={};
                // pass.newpass='123456pass';
                // pass.id=response.data.data[0].id;
                // console.log(pass);
                // $http.put(URL.API+'forgotpass',pass).then(function(data){
                //     console.log("sdf");
                //     console.log(data);
                console.log("ok");
            }else{
                console.log('error');
            }
        })
    }
}])