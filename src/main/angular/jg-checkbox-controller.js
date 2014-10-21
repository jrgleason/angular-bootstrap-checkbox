var CheckboxController = function($scope){
  $scope.checkCtrl = this
  // Default Values
  $scope.stylebtn = $scope.stylebtn || {};
  $scope.styleicon = $scope.styleicon || {"width": "10px", "left": "-1px"};
  $scope.checked = $scope.checked || false;

  this.click = function(value){
    $scope.checked = !$scope.checked;
	if($scope.callback != null){
	  $scope.callback({response : value});
	}
  }
}