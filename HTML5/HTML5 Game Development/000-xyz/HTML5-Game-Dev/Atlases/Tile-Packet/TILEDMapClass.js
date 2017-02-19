

var TILEDMapClass = Class.extend({
    // This is where we store the full parsed
    // JSON of the map.json file.
    currMapData: null,

    // tilesets stores each individual tileset
    // from the map.json's 'tilesets' Array.
    // The structure of each entry of this
    // Array is explained below in the
    // parseAtlasDefinition method.
    tilesets: [],

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

    //-----------------------------------------
    // Parses the map data from 'mapJSON', then
    // stores that data in a number of members
    // of our 'TILEDMapClass' that are defined
    // above.
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

        // Loop through 'map.tilesets', an Array...
        for(var i = 0; i < map.tilesets.length; i++) {

            // ...loading each of the provided tilesets as
            // Images...
            var img = new Image();
            img.onload = function () {
                // ...Increment the above 'imgLoadCount'
                // field of 'TILEDMap' as each tileset is 
                // loading...
                gMap.imgLoadCount++;
                if (gMap.imgLoadCount === map.tilesets.length) {
                    // ...Once all the tilesets are loaded, 
                    // set the 'fullyLoaded' flag to true...
                    gMap.fullyLoaded = true;
                }
            };

            // The 'src' value to load each new Image from is in
            // the 'image' property of the 'tilesets'.
            img.src = map.tilesets[i].image;
            
            var currItem = map.tilesets[i];
            // This is the javascript object we'll create for
            // the 'tilesets' Array above. First, fill in the
            // given fields with the corresponding fields from
            // the 'tilesets' Array in 'currMapData'.
            var ts = {
                // All of these fields have incorrect dummy data
                // currently! You need to replace this with the
                // correct data.
                "firstgid": currItem.firstgid/* YOUR CODE HERE */,

                // 'image' should equal the Image object we
                // just created.

                "image": img/* YOUR CODE HERE */,
                "imageheight": currItem.imageheight/* YOUR CODE HERE */,
                "imagewidth": currItem.imagewidth/* YOUR CODE HERE */,
                "name": currItem.name/* YOUR CODE HERE */,

                // These next two fields are tricky. You'll
                // need to calculate this data from the
                // width and height of the overall image and
                // the size of each individual tile.
                // 
                // Remember: This should be an integer, so you
                // might need to do a bit of manipulation after
                // you calculate it.

                "numXTiles": Math.floor(currItem.imagewidth / currItem.tilewidth)/* YOUR CODE HERE */,
                "numYTiles": Math.floor(currItem.imageheight / currItem.tileheight)/* YOUR CODE HERE */
            };
            
            // After that, push the newly created object into
            // the 'tilesets' Array above. Javascript Arrays
            // have a handy method called, appropriately, 'push'
            // that does exactly this. It takes the object
            // we'd like to put into the Array as a parameter.
            // 
            // YOUR CODE HERE
            gMap.tilesets.push(ts);
            
        }
    }

});

var gMap = new TILEDMapClass();

