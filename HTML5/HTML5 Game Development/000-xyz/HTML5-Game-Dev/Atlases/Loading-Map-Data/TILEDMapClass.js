

var TILEDMapClass = Class.extend({
    
    // Boolean flag we set once our map atlas
    // has finished loading.
    fullyLoaded: false,

    //-----------------------------------------
    // Load the json file at the url 'map' into
    // memory. This is similar to the requests
    // we've done in the past using
    // XMLHttpRequests.
    load: function (map) {

        // Perform an XMLHttpRequest to grab the
        // JSON file at url 'map'. We've provided
        // the xhrGet function from the optional
        // unit for you to use if you want.
        //
        // Once the XMLHttpRequest loads, set the
        // 'fullyLoaded' flag to true.
        //
        // YOUR CODE HERE
        xhrGet(map,function(){
            this.fullyLoaded = true;
        });
        
    }

});


// We define a single global instance of our
// map for the rest of our game code to access.
var gMap = new TILEDMapClass();

