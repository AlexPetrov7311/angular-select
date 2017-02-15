/*!
 * angular-directive-boilerplate
 * 
 * Version: 0.0.8 - 2017-02-15T07:47:10.913Z
 * License: MIT
 */


'use strict';

angular.module('ngSelect', []).directive('ngSelect', function () {

  return {
    restrict: 'E',
    templateUrl: 'directive.html',
    replace: true,
    scope: {
      'menu':'=',
      'selected':'=',
      'placeholder':'@'
    },
    link: function ($scope) {
      $scope.selectItem = function (item) {
        $scope.hidenMenu = true;
        $scope.selected = item;
      };
    }
  };
});

angular.module("ngSelect").run(["$templateCache", function($templateCache) {$templateCache.put("directive.html","<div class=\"select\" ng-init=\"hidenMenu= true;\" ng-click=\"hidenMenu = false;console.log(\'show\')\" ng-mouseleave=\"hidenMenu = true;\"><div class=\"select-styled\">{{[ placeholder,selected.display][(selected.display!=undefined)+0]}}</div><ul class=\"select-options\" ng-hide=\"hidenMenu\" ng-click=\"hidenMenu = true;\"><li rel=\"hide\">{{placeholder}}</li><li rel=\"{{item.value}}\" ng-repeat=\"item in menu\"><div ng-click=\"selectItem(item); $event.stopPropagation();\">{{item.display}}</div></li></ul></div>");}]);