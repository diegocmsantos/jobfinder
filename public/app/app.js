angular.module('app', ['ngResource']);

(function(){

  'use strict';

  angular.module('app')
    .controller('TestCtrl', [ '$scope', '$resource', TestCtrl ]);

  function TestCtrl($scope, $resource) {

    var vm = this;

    $scope.jobs = $resource('/api/jobs').query();

  }

})();