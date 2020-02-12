app.controller('pedicurectrl',['$http', '$scope', function($http, $scope){
    console.log("camepedicure");
    $scope.loading=true;
    $http.get('http://localhost:3004/v1/pedicuretotal/').then(function(response){
        $scope.loading=false;   
        console.log(response.data.data);
        $scope.some=response.data.data;
    })
    $scope.openAddMemberPopup=function(){
        $scope._id=undefined;
        $scope.email="";
        $scope.name="";
        $scope.address="";
        $scope.mobilenumber="";
    }
    $scope.submitAddMemberPopup=function(val1, val2, val3, val4){
        var pedicure={};
        pedicure.email=val1;
        pedicure.name=val2;
        pedicure.address=val3;
        pedicure.mobilenumber=val4;
        $scope.loading=true;
        $http.post('http://localhost:3004/v1/pedicuretotal/',pedicure).then(function(response){
            $scope.loading=false;
            console.log(response.data)
        })
    }
    $scope.editMember=function($index, pedicure){
        $scope._id=pedicure.id;
        $scope.email=pedicure.email;
        $scope.name=pedicure.name;
        $scope.address=pedicure.address;
        $scope.mobilenumber=pedicure.mobilenumber;
    }
    $scope.edit=function(val1, val2, val3, val4){
       var pedicureobj={};
       pedicureobj.email=val1;
       pedicureobj.name=val2;
       pedicureobj.address=val3;
       pedicureobj.mobilenumber=val4;
       $scope.loading=true;
        $http.put('http://localhost:3004/v1/pedicuretotal/'+$scope._id, pedicureobj).then(function(response){
            $scope.loading=true;    
            console.log(response)
        })
    }
    $scope.deleteMember=function(val2){
        $scope._id=val2;
        $scope.loading=true;
        console.log($scope._id)
        $http.delete('http://localhost:3004/v1/pedicuretotal/'+$scope._id).then(function(response){
            console.log(response);
        })
    }
}])