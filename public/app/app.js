angular.module('app', []);

(function(){

  'use strict';

  angular.module('app')
    .controller('TestCtrl', [ '$scope', TestCtrl ]);

  function TestCtrl($scope) {

    var vm = this;

    $scope.jobs = [
      {
        title: 'Sales Person',
        description: 'you will fight dragons'
      },
      {
        title: 'Accountant',
        description: 'you will use the keyboard'
      }
    ];

  }

})();