const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



/*

https://nodejs.org/api/synopsis.html


node [options] [v8 options] [script.js | -e "script"] [arguments]


node -e scriptname !== node scriptname.js

node -e "scriptcodes" === node scriptname.js


https://nodejs.org/api/cli.html#cli_command_line_options


node [options] [v8 options] [script.js | -e "script"] [--] [arguments]

node debug [script.js | -e "script" | <host>:<port>] …

node --v8-options

*/





/*


let x = 1; let y = 2; let sum = x + y; let sum = 1 + 2;

console.log(`sum = ${sum}`);


node -e " let x = 1; let y = 2; let sum = x + y; let sum = 1 + 2; console.log(`sum = ${sum}`); "

*/


// space error: console.log("holy shit");

// - error: console.log("holy-shit");

// _OK: console.log("holy_shit");







