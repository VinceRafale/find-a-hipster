angular.module('starter.services', [])

.factory('Loader', function($rootScope, $ionicLoading) {

  return {
    show : function(message) { //code from the ionic framework doc
      // Show the loading overlay and text
      $rootScope.loading = $ionicLoading.show({

        // The text to display in the loading indicator
        content: message,

        // The animation to use
        // animation: 'fade-in',

        // Will a dark overlay or backdrop cover the entire view
        showBackdrop: false
      });
    },
    hide : function(){
      $rootScope.loading.hide();
    }
  }

})

.factory('Cafes', function($q) {

  var cafes = [];

  return {
    refreshFromRemote: function() {
      var deferred = $q.defer();

      var cafesUrl = 'https://docs.google.com/spreadsheet/pub?hl=en&hl=en&key=0AsNz63BMymZodFBtZUxKYkZQcFdabGFpNHNVcXdGYkE&gid=0&output=html';
      Tabletop.init({
        key: cafesUrl,
        callback: function(data, tabletop) {
          cafes = tabletop.sheets('Hip').elements;
          deferred.resolve();
        },
        simpleSheet: false,
        postProcess: function(elem) {
          elem['addressLine1']  = elem['addressline1'];
          elem['addressLine2']  = elem['addressline2'];
          
          var cleanupBooleanFor = function(str) {
            if (str == 'TRUE') {
              return true;
            } else if (str == 'FALSE') {
              return false;
            };
          };

          elem['hasAlcohol']    = cleanupBooleanFor(elem['hasalcohol']);
          elem['hasCakes']      = cleanupBooleanFor(elem['hascakes']);
          elem['hasCoffee']     = cleanupBooleanFor(elem['hascoffee']);
          elem['hasIceCream']   = cleanupBooleanFor(elem['hasicecream']);
          elem['hasMainCourse'] = cleanupBooleanFor(elem['hasmaincourse']);
          elem['hasPowerpoint'] = cleanupBooleanFor(elem['haspowerpoint']);
          elem['hasWifi']       = cleanupBooleanFor(elem['haswifi']);
        }
      });

      return deferred.promise;
    },
    all: function() {
      return cafes;
    }

  }
});
