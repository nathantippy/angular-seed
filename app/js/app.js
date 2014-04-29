'use strict';


var app = angular.module('myApp', ['ngRoute',
                                   'myApp.filters',
                                   'myApp.services',
                                   'myApp.directives'
            ]);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl', view: 'center'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl', view: 'center'});
  $routeProvider.when('/view3', {templateUrl: 'partials/partial3.html', controller: 'MyCtrl', view: 'center'});
  $routeProvider.when('/view4', {templateUrl: 'partials/partial4.html', controller: 'MyCtrl', view: 'center'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

//7-5 change to ['$scope',function] for minimizer
app.controller('MyCtrl', (function($scope,stickers) {

      $scope.toggleSelect = function(item) {
          item.selected = !item.selected;
      };
      
      $scope.itemClass = function(item) {
          return item.selected?'selected':'';
      };

      $scope.items = stickers;

      $scope.selectedCount = function() {
         var total = 0;
          stickers.map(function(item){total=(item.selected?total+1:total);});
          return total;
      };
      $scope.totalCount = function() {
          return stickers.length;
       };
      $scope.clearAll = function() {
          stickers.map(function(item){item.selected = false;});
      }
      $scope.print = function() {
          window.print();
      };
      $scope.isCallableTime = function() {
          
          var min =  9 * 60  + 0;
          var max = 17 * 60  + 0;
          
          var d = new Date();
          var millis = now.getTime() + (now.getTimezoneOffset() * 60000)
          
          var now = d.getHours() * 60 + d.getMinutes();
          
          return now>min && now<max;
          
      };
      
      $scope.printDiv = function(divName) {
          var printContents = document.getElementById(divName).innerHTML;
          var originalContents = document.body.innerHTML;

          document.body.innerHTML = printContents;

          window.print();

          document.body.innerHTML = originalContents;
     }
      
  }));