(function(){
  angular.module('app')
  .factory('firebaseService',firebaseService);
  firebaseService.$inject=['$firebaseAuth'];
  function firebaseService($firebaseAuth){
    var ref=new Firebase('https://cenixiaapp.firebaseio.com/');
    var auth=$firebaseAuth(ref);
    var firebaseServiceObject={
      ref:ref,
      auth:auth
    };
    return firebaseServiceObject;
  }
})();
