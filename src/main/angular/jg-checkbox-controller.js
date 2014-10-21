var CheckboxController = function($scope){
  $scope.checkCtrl = this
  // Default Values
  $scope.stylebtn = $scope.stylebtn || {};
  $scope.styleicon = $scope.styleicon || {"width": "10px", "left": "-1px"};
  $scope.checked = $scope.checked || false;
  $scope.trueValue = $scope.trueValue || true;
  $scope.falseValue = $scope.falseValue || false;
  this.click = function(){
    if(!$scope.checked) {
		$scope.checked = true;
		$scope.value = $scope.trueValue;
	} else {
		$scope.checked = false;
		$scope.value = $scope.falseValue;
	}
	if($scope.onClick != null){
	  $scope.onClick();
	}
  }
}