# push-api-demo

This is an attempt to create a simple chatroom example to demonstrate the [Push API](). 

It also illustrates some uses of [Service Workers](), 

and how to use [Channel Messaging]()to communicate data between a Service Worker and the main window context.



## Still to do

* Hosting the server somewhere on t'internet so it can be accessed by multiple users (a chatroom is pretty useless with only one user!)
* Improving the Node server so that it will handle the push messages, AND serve the static files. This is needed for it to start working on Chrome (and Chrome doesn't yet support the PushMessageData either.)


## Running the demo

1. Clone repo locally:

    $ git clone https://github.com/xgqfrms/push-api.git

2. Install dependencies:

    $ cd push-api 
    $ npm i -S

3. Run the app:

    $ node server.js

5. Open browser  
    https://127.0.0.1:7000/index.html
    (Note: You will need to add a security exception)



## error ???  



https://127.0.0.1:7000/index.html


var options = {
    pfx: fs.readFileSync('aa34f6b8-f1c5-4e32-afd7-7a5f9f0b659c.pfx'),
    passphrase: 'password'
};



OK ?



Uncaught (in promise) DOMException: Failed to register a ServiceWorker: An SSL certificate error occurred when fetching the script.



https://github.com/mwmaleks/node-openssl-p12


???  SSL 

client's ssl certificate generator for Node JS based on OpenSSL


https://github.com/search?o=desc&q=Node+++OpenSSL&s=stars&type=Repositories&utf8=%E2%9C%93


https://github.com/justmoon/node-bignum


https://github.com/quartzjer/ursa

https://github.com/mgcrea/node-openssl-wrapper


https://github.com/ericvicenti/csr-gen



