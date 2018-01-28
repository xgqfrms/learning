const app = require('http').createServer((req, res) => res.send('Ahoy!'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}\n`);
    console.log(`process.env =\n`, process.env);
    console.log('The value of PORT is:', process.env.PORT);
});

// (To exit, press ^C again or type .exit)


/*
// you must need to set environment variables before call them!
set NODE_ENV=production
set NODE_ENV=development
# default value

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

NODE_ENV=production node dotenv-example.js
NODE_ENV=production && node dotenv-example.js

// process.env.NODE_ENV = undefined;
let node_env = process.env.NODE_ENV || 'empty';
console.log(`process.env.NODE_ENV`, node_env);


"scripts": {
    "start": "set NODE_ENV=dev && node app.js"
}


let node_env = process.env.NODE_ENV || 'development';

//

*/
