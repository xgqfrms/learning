

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

    // Counter to keep track of how many tile
    // images we have successfully loaded.
    imgLoadCount: 0,

    // Boolean flag we set once our tile images
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

        var map = gMap.currMapData;
      
        // Set 'numXTiles' and 'numYTiles' from the
        // 'width' and 'height' fields of our parsed
        // map data.
        gMap.numXTiles = map.width;
        gMap.numYTiles = map.height;
      
        // Set the 'tileSize.x' and 'tileSize.y' fields
        // from the 'tilewidth' and 'tileheight' fields
        // of our parsed map data.
        gMap.tileSize.x = map.tilewidth;
        gMap.tileSize.y = map.tileheight;
      
        // Set the 'pixelSize.x' and 'pixelSize.y' fields
        // by multiplying the number of tiles in our map
        // by the size of each tile in pixels.
        gMap.pixelSize.x = gMap.numXTiles * gMap.tileSize.x;
        gMap.pixelSize.y = gMap.numYTiles * gMap.tileSize.y;

        // Loop through 'map.tilesets', an Array, loading each
        // of the provided tilesets as Images. Increment the
        // above 'imgLoadCount' field of 'TILEDMap' as each
        // tileset is loading. Once all the tilesets are
        // loaded, set the 'fullyLoaded' flag to true.
        //
        // The 'src' value to load each new Image from is in
        // the 'image' property of the 'tilesets'.
        // 
        // Note that TILED by default has a rather ugly path
        // for the 'image' property, which we'll discuss in
        // the answer video. You won't need to worry about
        // that right now.
        //
        // YOUR CODE HERE
        for(var i = 0; i < map.tilesets.length; i++){
            var img = new Image();
            img.onload = function(){
                gMap.imgLoadCount++;
                if (gMap.imgLoadCount === map.tilesets.length){
                    gMap.fullyLoaded = true;
                }
            };
            img.src = map.tilesets[i].image;
        }
    }
});

var gMap = new TILEDMapClass();

