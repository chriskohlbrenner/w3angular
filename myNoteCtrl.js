noteApp.controller('myNoteCtrl', function($scope) {
  $scope.noteSaved = false;
  $scope.noteContent = "";
  $scope.charsRemaining = function(){
    return 140 - $scope.noteContent.length;
  }
  $scope.saveNote = function(){
    $scope.noteSaved = true;
  }
  $scope.clearNote = function(){
    $scope.noteContent = "";
  }
  $scope.editNote = function(){
    $scope.noteSaved = false;
  }
});