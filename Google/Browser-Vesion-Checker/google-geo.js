function getLocationfromGoogle() {
    navigator.geolocation.getCurrentPosition(
        function(pos) {
            $("#lat_field").val(pos.coords.latitude);
            $("#long_field").val(pos.coords.longitude);
            var geocoder = new google.maps.Geocoder();
            var latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            geocoder.geocode({ 'latLng': latLng }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    //console.log(results[0].formatted_address);
                    $("#adresim").val(results[0].formatted_address);
                } else {
                    alert('Google convertion is not succesfully done.');
                }
            });
        },
        function error(msg) {
            alert('Please enable your GPS position future.');
        }, { maximumAge: 600000, timeout: 5000, enableHighAccuracy: false }
    );
}

/*
http://stackoverflow.com/questions/9053262/geolocation-html5-enablehighaccuracy-true-false-or-best-option

*/
