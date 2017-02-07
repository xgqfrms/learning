'use strict';
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var port = process.env.PORT || 8080;
var app = express();
var cors = require('cors');
var compiler = webpack(config);
var cloudinary = require('cloudinary');
var bodyParser = require('body-parser');
app.use( bodyParser.json({limit:'50mb'}) );


app.use(cors());
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo:true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));


var isProduction = process.env.NODE_ENV === 'production';
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.join(__dirname, "assets")));

cloudinary.config({
    cloud_name: 'YOUR_CLOUD_NAME',
    api_key: 'YOUR_API_KEY',
    api_secret: 'YOUR_API_SECRET'
});



var routes = function (app) {
    app.post('/upload', function(req, res) {
        cloudinary.uploader.upload(req.body.image, function(result) {
            res.send(JSON.stringify(result));
        });
    });
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'assets','index.html'));
    });
}




var router = express.Router();
routes(router);
app.use(router);

app.listen(port, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:'+port);
});




