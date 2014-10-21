angular.module('templates-main', ['main/partials/checkbox.jade']);

angular.module("main/partials/checkbox.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/partials/checkbox.jade",
    "<div>\n" +
    "  <button type=\"button\" ng-style=\"stylebtn\" ng-class=\"{'btn-xs':size==='default', 'btn-sm': size==='large', 'btn-lg': size==='largest'}\" ng-click=\"checkCtrl.click(value)\" class=\"btn btn-default\"><span ng-style=\"styleicon\" ng-class=\"{'glyphicon-ok': checked===true}\" class=\"glyphicon\"></span></button>\n" +
    "  <div ng-transclude=\"ng-transclude\"></div>\n" +
    "</div>");
}]);
