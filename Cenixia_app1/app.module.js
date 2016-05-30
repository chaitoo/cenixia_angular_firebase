(function(){
  angular.module('app',['ngRoute','firebase'])
  .config(configFunc);
  configFunc.$inject=['$routeProvider'];
  function configFunc($routeProvider){
    $routeProvider.when('/newform',{
      templateUrl:'views/form.html',
      controller:'AuthController',
      controllerAs:'vm'
    });
  }
})();
