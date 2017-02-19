

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

            // This is the javascript object we'll create for
            // the 'tilesets' Array above. First, fill in the
            // given fields with the corresponding fields from
            // the 'tilesets' Array in 'currMapData'.
            var ts = {
                "firstgid": gMap.currMapData.tilesets[i].firstgid,

                // 'image' should equal the Image object we
                // just created.

                "image": img,
                "imageheight": gMap.currMapData.tilesets[i].imageheight,
                "imagewidth": gMap.currMapData.tilesets[i].imagewidth,
                "name": gMap.currMapData.tilesets[i].name,

                // These next two fields are tricky. You'll
                // need to calculate this data from the
                // width and height of the overall image and
                // the size of each individual tile.
                // 
                // Remember: This should be an integer, so you
                // might need to do a bit of manipulation after
                // you calculate it.

                "numXTiles": Math.floor(gMap.currMapData.tilesets[i].imagewidth / gMap.tileSize.x),
                "numYTiles": Math.floor(gMap.currMapData.tilesets[i].imageheight / gMap.tileSize.y)
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
    },

    //-----------------------------------------
    // Grabs a tile from our 'layer' data and returns
    // the 'pkt' object for the layer we want to draw.
    // It takes as a parameter 'tileIndex', which is
    // the id of the tile we'd like to draw in our
    // layer data.
    getTilePacket: function (tileIndex) {

        // We define a 'pkt' object that will contain
        // 
        // 1) The Image object of the given tile.
        // 2) The (x,y) values that we want to draw
        //    the tile to in map coordinates.
        var pkt = {
            "img": null,
            "px": 0,
            "py": 0
        };

        // The first thing we need to do is find the
        // appropriate tileset that we want to draw
        // from.
        //
        // Remember, if the tileset's 'firstgid'
        // parameter is less than the 'tileIndex'
        // of the tile we want to draw, then we know
        // that tile is not in the given tileset and
        // we can skip to the next one.
        var tile = 0;
        for(tile = gMap.tilesets.length - 1; tile >= 0; tile--) {
            if(gMap.tilesets[tile].firstgid <= tileIndex) break;
        }

        // Next, we need to set the 'img' parameter
        // in our 'pkt' object to the Image object
        // of the appropriate 'tileset' that we found
        // above.
        pkt.img = gMap.tilesets[tile].image;


        // Finally, we need to calculate the position to
        // draw to based on:
        //
        // 1) The local id of the tile, calculated from the
        //    'tileIndex' of the tile we want to draw and
        //    the 'firstgid' of the tileset we found earlier.
        var localIdx = tileIndex - gMap.tilesets[tile].firstgid;

        // 2) The (x,y) position of the tile in terms of the
        //    number of tiles in our tileset. This is based on
        //    the 'numXTiles' of the given tileset. Note that
        //    'numYTiles' isn't actually needed here. Think about
        //    how the tiles are arranged if you don't see this,
        //    It's a little tricky. You might want to use the 
        //    modulo and division operators here.
        var lTileX = Math.floor(localIdx % gMap.tilesets[tile].numXTiles);
        var lTileY = Math.floor(localIdx / gMap.tilesets[tile].numXTiles);

        // 3) the (x,y) pixel position in our tileset image of the
        //    tile we want to draw. This is based on the tile
        //    position we just calculated and the (x,y) size of
        //    each tile in pixels.
        pkt.px = (lTileX * gMap.tileSize.x);
        pkt.py = (lTileY * gMap.tileSize.y);


        return pkt;
    },

    //-----------------------------------------
    // Draws all of the map data to the passed-in
    // canvas context, 'ctx'.
    draw: function (ctx) {
        // First, we need to check if the map data has
        // already finished loading.
        if(!gMap.fullyLoaded) return;


        
        // Now, for every single layer in the 'layers' Array
        // of 'currMapData', we need to:
        // 
        // 1) Check if the 'type' of the layer is "tilelayer".
        //    If it isn't, we don't care about drawing it.
        //
        // 2) If it is a "tilelayer", we grab the 'data' Array
        //    of the given layer.
        //
        // 3) For each tile id in the 'data' Array, we need
        //    to:
        //    
        //    a) Check if the tile id is 0. An id of 0 means that
        //       we don't need to worry about drawing it, so we
        //       don't need to do anything further with it.
        //
        //    b) If the tile id is not 0, then we need to grab
        //       the packet data using 'getTilePacket' called
        //       on that tile id.
        //
        // YOUR CODE HERE
        for (var i = 0; i < this.currMapData.layers.length; i++){
            var currLayer = this.currMapData.layers[i];
            if (typeof currLayer.type !== "undefined" && currLayer.type ==="tilelayer"){
                var data = currLayer.data;
                
                for(var dId = 0; dId < data.length; dId++){
                    if (data[dId] !== 0)
                    {
                        gMap.getTilePacket(data[dId]);
                    }
                }
            }
        }
        
    }

});

var gMap = new TILEDMapClass();

