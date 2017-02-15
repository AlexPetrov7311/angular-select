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
