"use strict";
var app = angular.module("ui.checkbox", [
                                           'templates-main'
										]);
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
var CheckboxDirective = function(){
    return {
		scope: {
		  size:"=?",
		  stylebtn:"=?",
		  styleicon:"=?",
		  value:"=?",
		  checked:"=?",
		  onClick:"&?",
		  trueValue:"=?",
		  falseValue:"=?"
		},
		controller: CheckboxController,
		restrict: "E",
		replace: "true",
		templateUrl: "main/partials/checkbox.jade",
		link: function(scope, elem, attrs) {
			if(attrs.large !== undefined) {
				scope.size = "large";
				scope.stylebtn = {"padding-top": "2px", "padding-bottom": "2px", "height": "30px"};
				scope.styleicon = {"width": "8px", "left": "-5px", "font-size": "17px"};
			}
			if(attrs.larger !== undefined) {
				scope.size = "larger";
				scope.stylebtn = {"padding-top": "2px", "padding-bottom": "2px", "height": "34px"};
				scope.styleicon = {"width": "8px", "left": "-8px", "font-size": "22px"};
			}
			if(attrs.largest !== undefined) {
				scope.size = "largest";
				scope.stylebtn = {"padding-top": "2px", "padding-bottom": "2px", "height": "45px"};
				scope.styleicon = {"width": "11px", "left": "-11px", "font-size": "30px"};
			}
		}
	};
}

angular.module("ui.checkbox")
       .directive("jgCheckbox",CheckboxDirective);