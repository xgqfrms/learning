

var TILEDMapClass = Class.extend({
    // This is where we store the full parsed
    // JSON of the map.json file.
    currMapData: null,

    // This is where we store the width and
    // height of the map in tiles. This is
    // in the 'width' and 'height' fields
    // of map.json, respectively.
    // The values 100 here are just set
    // so these fields are initialized to
    // something, rather than null.
    numXTiles: 100,
    numYTiles: 100,

    // The size of each individual map
    // tile, in pixels. This is in the
    // 'tilewidth' and 'tileheight' fields
    // of map.json, respectively.
    // The values 64 here are just set
    // so these fields are initialized to
    // something, rather than null.
    tileSize: {
        "x": 64,
        "y": 64
    },

    // The size of the entire map,
    // in pixels. This is calculated
    // based on the 'numXTiles', 'numYTiles',
    // and 'tileSize' parameters.
    // The values 64 here are just set
    // so these fields are initialized to
    // something, rather than null.
    pixelSize: {
        "x": 64,
        "y": 64
    },

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
        // JSON file at url 'map'.
        xhrGet(map, function (data) {
            // Once the XMLHttpRequest loads, call the
            // parseMapJSON method.
            gMap.parseMapJSON(data.responseText);
        });
    },

    //---------------------------
    parseMapJSON: function (mapJSON) {
        // Call JSON.parse on 'mapJSON' and store
        // the resulting map data
        gMap.currMapData = JSON.parse(mapJSON);

        // Set the above properties of our TILEDMap based
        // on the various properties in 'currMapData'.
        // Look at the comments describing each field
        // to see what properties of 'currMapData' to pull
        // this information from.
        //
        // Once you're done, set fullyLoaded to true.
        //
        // YOUR CODE HERE
        
        gMap.numXTiles = gMap.currMapData.width;
        gMap.numYTiles = gMap.currMapData.height;
        gMap.tileSize.x = gMap.currMapData.tilewidth;
        gMap.tileSize.y = gMap.currMapData.tileheight;
        gMap.pixelSize.x = this.numXTiles * this.tileSize.x;
        gMap.pixelSize.y = this.numYTiles * this.tileSize.y;
        gMap.fullyLoaded = true;
        
    }

});

var gMap = new TILEDMapClass();

