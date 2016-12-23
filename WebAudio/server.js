'use strict';

const PORT = 8888;

const http = require('http');
const fs = require('fs');
const server = http.createServer(respond);

server.listen(PORT, () => console.log(`Server listening on ${PORT}...`));

function respond(req, res) {
    switch (req.url) {
        case '/':
        case '/web-audio-webrtc.html':
            serveFile(res, 'web-audio-webrtc.html', 'text/html');
            break;
        case '/web-audio-webrtc.js':
            serveFile(res, 'web-audio-webrtc.js', 'application/javascript');
            break;
        default:
            notFound(res);
    }
}

function serveFile(res, filename, contentType) {
    res.writeHead(200, {
        'Content-Type': contentType
    });
    return fs.createReadStream(filename).pipe(res);
}

function notFound(res) {
    res.writeHead(404, {
        'Content-Type': 'text/plain'
    });
    res.end('Not Found', 'utf-8');
}
