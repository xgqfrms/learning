
const express = require('express');
const app = express();

let port = 3000;

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(port, function(){
    console.log(`app listening on ${port} !`);
});
