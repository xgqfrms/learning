var express = require('express'),
    fs = require('fs'),
    https = require('https'),
    serveStatic = require('serve-static'),
    url = require('url'),
    webPush = require('web-push');

var options = {
    pfx: fs.readFileSync('aa34f6b8-f1c5-4e32-afd7-7a5f9f0b659c.pfx'),
    passphrase: 'password'
};

var dupe = 'true';

var app = express();
app.use(serveStatic(__dirname, { 'index': false }));
app.post('/', function(request, response) {
    var body = "";

    request.on('data', function(chunk) {
        body += chunk;
    });

    request.on('end', function() {
        if (!body) return;
        var obj = JSON.parse(body);
        var bodyArray = [obj.statusType, obj.name, obj.endpoint];
        console.log('POSTed: ' + obj.statusType);

        // if(obj.statusType === 'dupeCheck') {
        //   fs.readFile("endpoint.txt", function (err, buffer) {
        //     var string = buffer.toString();
        //     var array = string.split('\n');
        //     for(i = 0; i < (array.length-1); i++) {
        //       var subscriber = array[i].split(',');
        //       console.log(subscriber[1]);
        //       console.log(obj.name);
        //       if(obj.name === subscriber[1]) {
        //         console.log('dupe check true');
        //         dupe = 'true';
        //       } else {
        //         console.log('dupe check false');
        //         dupe = 'false';
        //       }
        //     }
        //   });
        // } else

        if (obj.statusType === 'chatMsg') {
            fs.readFile("endpoint.txt", function(err, buffer) {
                var string = buffer.toString();
                var array = string.split('\n');
                for (i = 0; i < (array.length - 1); i++) {
                    var subscriber = array[i].split(',');
                    webPush.sendNotification(subscriber[2], 200, obj.key, JSON.stringify({
                        action: 'chatMsg',
                        name: obj.name,
                        msg: obj.msg
                    }));
                };
            });
        } else if (obj.statusType === 'init') {
            fs.readFile("endpoint.txt", function(err, buffer) {
                var string = buffer.toString();
                var array = string.split('\n');
                for (i = 0; i < (array.length - 1); i++) {
                    var subscriber = array[i].split(',');
                    webPush.sendNotification(subscriber[2], 200, obj.key, JSON.stringify({
                        action: 'init',
                        name: subscriber[1]
                    }));
                };
            });

        } else if (obj.statusType === 'subscribe') {
            fs.appendFile('endpoint.txt', bodyArray + '\n', function(err) {
                if (err) throw err;
                fs.readFile("endpoint.txt", function(err, buffer) {
                    var string = buffer.toString();
                    var array = string.split('\n');
                    for (i = 0; i < (array.length - 1); i++) {
                        var subscriber = array[i].split(',');
                        webPush.sendNotification(subscriber[2], 200, obj.key, JSON.stringify({
                            action: 'subscribe',
                            name: subscriber[1]
                        }));
                    };
                });
            });
        } else if (obj.statusType === 'unsubscribe') {
            fs.readFile("endpoint.txt", function(err, buffer) {
                var newString = '';
                var string = buffer.toString();
                var array = string.split('\n');
                for (i = 0; i < (array.length - 1); i++) {
                    var subscriber = array[i].split(',');
                    console.log('Unsubscribe: ' + subscriber[1]);

                    webPush.sendNotification(subscriber[2], 200, obj.key, JSON.stringify({
                        action: 'unsubscribe',
                        name: subscriber[1]
                    }));

                    if (obj.endpoint === subscriber[2]) {
                        console.log('subscriber found.');
                    } else {
                        newString += array[i] + '\n';
                    }

                    fs.writeFile('endpoint.txt', newString, function(err) {
                        if (err) throw err;
                    });
                }

            });


        }
    });

    response.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Access-Control-Allow-Headers"
    });

    response.write(dupe);

    response.end();

});

var httpsServer = https.createServer(options, app)
httpsServer.listen(7000);
console.log("Server Running on 7000.");
