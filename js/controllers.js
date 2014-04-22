angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $state, Loader, Cafes) {
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(1.3241717, 103.843130500000030000),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Stop the side bar from dragging when mousedown/tapdown on the map
    google.maps.event.addDomListener(document.getElementById('map-canvas'), 'mousedown', function(e) {
      e.preventDefault();
      return false;
    });

    $scope.map = map;

    $scope.markers = [];

    var createMarker = function (cafe){
      var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(cafe.latitude, cafe.longitude),
                      title: cafe.name
                    });
      marker.content = '<div class="infoWindowContent">' + cafe.name + '</div>';
      
      google.maps.event.addListener(marker, 'click', function(){
        $state.go('tab.cafe-detail', {cafeId: cafe.id})
      });
      
      $scope.markers.push(marker);
    };

    for (i = 0; i < Cafes.all().length; i++){
      createMarker(Cafes.all()[i]);
    };

  };
  initialize(); // initialize map

  $scope.centerOnMe = function() {
    if(!$scope.map) {
      return;
    }

    Loader.show('Getting current location...');

    navigator.geolocation.getCurrentPosition(function(pos) {
      var userLatLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      $scope.map.setCenter(userLatLng);
      var circle = new google.maps.Circle({
        center: userLatLng,
        radius: pos.coords.accuracy,
        map: $scope.map,
        fillColor: '#4B83F3',
        fillOpacity: 0.3,
        strokeColor: '#4B83F3',
        strokeOpacity: 0.8
      });
      $scope.map.fitBounds(circle.getBounds());
      Loader.hide();
    }, function(error) {
      alert('Unable to get location: ' + error.message);
      Loader.hide();
    });
  };

})

.controller('CafesCtrl', function($scope, Cafes) {
  $scope.cafes = Cafes.all();
})

.controller('CafeDetailCtrl', function($scope, $stateParams, Cafes) {
  $scope.cafe = Cafes.get($stateParams.cafeId);
  scroll(0,0);

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng($scope.cafe.latitude, $scope.cafe.longitude),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('detail-map-canvas'),
        mapOptions);

    // Stop the side bar from dragging when mousedown/tapdown on the map
    google.maps.event.addDomListener(document.getElementById('detail-map-canvas'), 'mousedown', function(e) {
      e.preventDefault();
      return false;
    });

    $scope.map = map;
    var marker = new google.maps.Marker({
                    map: $scope.map,
                    position: new google.maps.LatLng($scope.cafe.latitude, $scope.cafe.longitude),
                    title: $scope.cafe.name
                  });

  };
  initialize(); // initialize map

  $scope.highlightIf = function(boolean) {
    if (boolean == true) { return 'positive' };
  };
})

.controller('AboutCtrl', function($scope) {
});
