var app = angular.module('brandNew', []);

app.controller('brandNewCtrl', function($scope, $http) {
  $http.get("http://worldcup.kimonolabs.com/api/teams")
  .success(function(response) {
    $scope.teams = response;
  });
});