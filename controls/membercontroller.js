app.controller('memberctrl',['$scope', '$http', '$localStorage', function($scope, $http, $localStorage){
   emp_id=$localStorage.value.data1[0].id;
    console.log(emp_id)
    $http.get('http://localhost:3004/v1/member/'+emp_id).then(function(response){
        console.log(response.data.data[0]);
        $scope.ename=response.data.data[0].name11;
        $scope.emobilenumber=response.data.data[0].mobilenumber;
        $scope.eemail=response.data.data[0].email;
    })
}])