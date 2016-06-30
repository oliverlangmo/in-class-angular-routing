var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
    when("/home",{
      templateUrl:"/views/routes/home.html",
      controller: "HomeController"
    }).when("/projects", {
      templateUrl:"/views/routes/projects.html",
      controller: "ProjectsController"
      }).when("/cats", {
      templateUrl:"/views/routes/cats.html",
      controller: "CatsController"
    }).
    otherwise ({
      redirectTo: "home"
    });
}]);

myApp.controller("HomeController", ['$scope', "CounterService",function($scope, CounterService){

  console.log('HERE: ', CounterService.counter );
  console.log('HERE: ', CounterService.iterate() );
  console.log('HERE: ', CounterService.counter );
  $scope.iterator = function(){

  };


}]);
myApp.controller("ProjectsController", ['$scope', function($scope){

}]);
myApp.controller("CatsController", ['$scope', function($scope){


}]);
//scope not needed in factories
myApp.factory("CounterService", [function(){
  //private
   var catCounter = 1;
   var catIterate = function(val){
     val++;
   };
   //public
   return{
  //since object refers to private variable, it makes the private var public
     counter : catCounter,
     iterate: catIterate
    };
  }]);
