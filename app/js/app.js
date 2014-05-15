'use strict';


var app = angular.module('myApp', ['ngRoute','ngTouch','ngSanitize',
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
      $scope.stickerTitle = function() {
          var total = 0;
          stickers.map(function(item){total=(item.selected?total+1:total);});
          return total>0?"1. Review your selected stickers:":
                         "1. You have not selected any stickers, please return to the list and click on a sticker.";
      };
      $scope.totalCount = function() {
          return stickers.length;
       };
      $scope.clearAll = function() {
          stickers.map(function(item){item.selected = false;});
      };
      $scope.print = function() {
          window.print();
      };
      $scope.mailBody = function() {
          var body = encodeURIComponent("send the following:\n\r");
          stickers.map(function(item){
             if (item.selected) {
                 body = body+encodeURIComponent(item.title.replace("<br>","\n")+"\n\r\n\r");
             } 
          });
          body = body+encodeURIComponent("to this address:\n\r"+$scope.address+"\n\r");
          if ($scope.comment) {
              body = body+encodeURIComponent("\n\r"+$scope.comment+"\n\r");
          }
          return body;
      };

      
  }));