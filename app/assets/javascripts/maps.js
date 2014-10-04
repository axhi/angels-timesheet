var Location = {
  getLocation: function() {
    return navigator.geolocation.getCurrentPosition(function(position) {
      var p = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      var r = new google.maps.LatLng(44.024415,-88.158389);
      initialLocation = google.maps.geometry.spherical.computeDistanceBetween(p,r);
    });
  },
  checkArea: function() {
    if (initialLocation <= 804.672) {
      return true;
    } else {
      return false;
    }
  }
}
