app.controller('totalusersctrl',['$scope', '$http', '$localStorage', '$window', function($scope, $http, $localStorage, $window){
    $scope.ready = $localStorage.userData;    

        $http.get('http://localhost:3004/v1/totalusers/').then(function(response){
            $(window).on('load', function() {
                $('#loading').hide();
             });
            console.log(response.data.data);
            $scope.some=response.data.data;
            $scope.some.forEach(function(id){
                console.log(id);
                if(id.role==2){
                    console.log("admin");
                } else {
                    console.log("member");
                }
            })
        }) 
	
	$scope.search = function(startDate,endDate){
		console.log(startDate,endDate)
		console.log(moment(startDate).format("YYYY/MM/DD"))
		$http.get('http://localhost:3004/v1/totalusers?startdate='+moment(startDate).format("YYYY/MM/DD")+'&enddate='+moment(endDate).format("YYYY/MM/DD")).then(function(response){
            $(window).on('load', function() {
                $('#loading').hide();
             });
            console.log(response.data.data)
            $scope.some=response.data.data;
            $scope.some.forEach(function(id){
                console.log(id);
                if(id.role==2){
                    console.log("admin");
                } else {
                    console.log("member");
                }
            })
		});
	}
	
 
    $scope.openAddMemberPopup=function(){
        $scope._id=undefined;
        $scope.email="";
        $scope.name11="";
        $scope.address="";
        $scope.mobilenumber="";
    }

    $scope.submitAddMemberPopup=function(val1, val2, val3, val4){
        var emp = {};
        emp.email = val1;
        emp.name11 = val2;
        emp.address = val3;
        emp.mobilenumber = val4;

        $http.post('http://localhost:3004/v1/totalusers/', emp).then(function (data, status, headers, config) { 
            $(window).on('load', function() {
                $('#loading').hide();
             });    
        console.log(data) 
            if(data.status==true){
                $scope.some.push(emp)
            }
        })			
    }

    $scope.editMember=function(index, emp){
        $scope._id=emp.id;
        $scope.email=emp.email;
        $scope.name11=emp.name11;
        $scope.address=emp.address;
        $scope.mobilenumber=emp.mobilenumber;
        $scope.status=emp.status;
    }

    $scope.edit=function(val1, val2, val3, val4){
        var editobj={};
        editobj.email=val1;
        editobj.name11=val2;
        editobj.address=val3;
        editobj.status=val4;
        console.log($scope._id)


        $http.put('http://localhost:3004/v1/totalusers/'+$scope._id, editobj).then(function (data, status, headers, config) { 
            $(window).on('load', function() {
                $('#loading').hide();
             });
        })
    }

    $scope.deleteMember=function(index,id){
        if ($window.confirm("Do you want to delete: " )) {
            $scope.some.splice(index,1);
            $http.delete('http://localhost:3004/v1/totalusers/'+id).then(function(response){
                $(window).on('load', function() {
                    $('#loading').hide();
                 });
                console.log(response);
            }); 
        }
    }

    $scope.statuszero=function(){
        $scope.status=0;
        $http.get('http://localhost:3004/v1/totalusers?zerostatus='+$scope.status).then(function(response){
            $(window).on('load', function() {
                $('#loading').hide();
             });
            console.log(response.data.data);
            $scope.some = response.data.data;
            console.log($scope.some)
        })
    }

}])

