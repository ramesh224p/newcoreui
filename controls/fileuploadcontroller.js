
app.directive('fileModel', ['$parse', function ($parse) {
   return {
      restrict: 'A',
      link: function (scope, element, attrs) {
         var model = $parse(attrs.fileModel);
         var modelSetter = model.assign;

         element.bind('change', function () {
            scope.$apply(function () {
               modelSetter(scope, element[0].files[0]);
            });
         });
      }
   };
}]);
app.service('fileUpload', ['$http', function ($http) {
   this.uploadFileToUrl = function (uploadUrl, file) {
      var fd = new FormData();
      fd.append('file', file);

      $http.post(uploadUrl, fd, {
         transformRequest: angular.identity,
         headers: { 'Content-Type': undefined }
      })

   }
}]);

app.controller('fileCtrl', ['$scope', 'fileUpload', function ($scope, fileUpload) {
   $scope.uploadFile = function () {

      var file = $scope.myFile;
      console.log('file is ');
      console.dir(file);
      var uploadUrl = "http://localhost:3004/v1/baseupload";
      fileUpload.uploadFileToUrl(uploadUrl, imageURL);
   };
}]);


function encodeImageFileAsURL(element) {
   var file = element.files[0];
   var reader = new FileReader();
   reader.onloadend = function () {
      imageURL = reader.result;
      console.log(imageURL)
   }
   reader.readAsDataURL(file);
}


