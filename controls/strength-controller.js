app.controller('strengthctrl',['$http', '$scope','$window', function($http, $scope, $window){
    console.log("camestrength");
    $scope.loading=true;
    $http.get('http://localhost:3004/v1/strengthtotal/').then(function(response){
        $scope.loading=false;    
        console.log(response.data.data);
        $scope.some=response.data.data;
    })
    $scope.openAddMemberPopup=function(){
        $scope._id=undefined;
        $scope.email="",
        $scope.name="",
        $scope.address="",
        $scope.mobilenumber=""
    }
    $scope.submitAddMemberPopup=function(val1, val2, val3, val4){
        var strength={};
        strength.email=val1;
        strength.ContactPerson=val2;
        strength.address=val3;
        strength.mobilenumber=val4;
        $scope.loading=true;
        $http.post('http://localhost:3004/v1/strengthtotal/',strength).then(function(response){
            $scope.loading=false;
            console.log(response);
            if(response.data.status==true){
                console.log("true");
                $scope.some.push(strength)
            }
        })
    }
    $scope.editMember=function(index, strength){
        $scope._id=strength.id;
        $scope.email=strength.email;
        $scope.name=strength.name;
        $scope.address=strength.address;
        $scope.mobilenumber=strength.mobilenumber;
        console.log(strength)
    }
    $scope.edit=function(val1, val2, val3, val4){
        var strengthobj={};
        strengthobj.email=val1;
        strengthobj.name=val2;
        strengthobj.address=val3;
        strengthobj.mobilenumber=val4;
        $scope.loading=true;
        console.loading($scope._id)
        $http.put('http://localhost:3004/v1/strengthtotal/'+$scope._id, strengthobj).then(function(data){
            $scope.loading=false;
            console.log(data);
        })
    }
    $scope.deleteMember=function(index, id){
        if ($window.confirm("Do you want to delete: " )) {
            $scope.some.splice(index,1);
            $scope.loading=true;
            $http.delete('http://localhost:3004/v1/strengthtotal/'+id).then(function(response){
                $scope.loading=false;    
                console.log(response);
            })
        }
    }
}])