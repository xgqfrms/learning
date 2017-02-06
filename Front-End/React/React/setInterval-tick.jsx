/*

//node.js & npm 


import React from 'react';
import ReactDOM from 'react-dom';

*/

/*

browser + babel

https://cdn.xgqfrms.xyz/react/15.4.2/react.min.js
https://cdn.xgqfrms.xyz/react/15.4.2/react-dom.min.js

https://cdn.xgqfrms.xyz/babel/babel.min.js



<script src="./libs/react.min.js" crossorigin="anonymous"></script>
<script src="./libs/react-dom.min.js" crossorigin="anonymous"></script>
<script src="./libs/babel.min.js" crossorigin="anonymous"></script>


*/

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);



