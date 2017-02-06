# Rendering Elements

https://facebook.github.io/react/docs/rendering-elements.html



http://codepen.io/xgqfrms/full/xgzeaL/


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



<div id="root">
    <!-- This element's contents will be replaced with your component. -->
</div>





https://img.shields.io/badge/React-Babel-brightgreen.svg


https://img.shields.io/badge/React--Babel-Stable-brightgreen.svg


