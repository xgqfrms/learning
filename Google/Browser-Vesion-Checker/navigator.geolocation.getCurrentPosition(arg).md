# navigator.geolocation.getCurrentPosition(args)


https://www.w3.org/TR/geolocation-API/

Geolocation API Specification 2nd Edition
W3C Recommendation 8 November 2016





https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

navigator.geolocation.getCurrentPosition(success[, error[, options]])





var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
};

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);



Your current position is:

Latitude : 31.2780395
// 纬度

Longitude: 121.38369829999999
// 经度

More or less 78 meters.




https://developer.mozilla.org/en-US/docs/Web/API/Position  
https://developer.mozilla.org/en-US/docs/Web/API/PositionError  
https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions  





## How to get Position using the Latitude & Longitude ?


coordinates 
// 坐标


http://www.gps-coordinates.net/

Altitude: 5 meters

海拔：5米

http://www.gps-coordinates.net/api





http://www.gps-coordinates.net/api/eiffeltower

{
    "responseCode": "200",
    "identifier": "eiffeltower",
    "latitude": "48.8583701",
    "longitude": "2.2944813"
}


http://www.gps-coordinates.net/id/eiffeltower

http://www.where-am-i.co/



Latitude and Longitude to Address






https://forum.ionicframework.com/t/navigator-geolocation-getcurrentposition-work-not-work/5127/4

http://codepen.io/ionic/pen/uzngt

http://codepen.io/xgqfrms/full/vgvxVG/


http://www.w3schools.com/html/html5_geolocation.asp










