var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.arrayOfThings= [
      {"firstName": "Abigail",
       "lastName": "Acker"},
      {"firstName": "Benjamin",
       "lastName": "Button"},
      {"firstName": "Christopher",
       "lastName": "Cook"},
      {"firstName": "Doris",
       "lastName": "Day"},
      {"firstName": "Edward",
       "lastName": "Emsworth"}
    ];
    $scope.placeOfBirth = "";
    $scope.dateOfBirth = "";
    $scope.birthData = function(){ return $scope.placeOfBirth + ", " + $scope.dateOfBirth}
});