# Node.js API


https://webpack.js.org/api/node/











To start using webpack Node.js API, first install webpack if you haven’t yet:

```
$ npm install webpack --save-dev

``` 

Then require the webpack module in your Node.js script:

```
const webpack = require("webpack");

// Or if you prefer ES2015:
import webpack from "webpack";

``` 





```
const webpack = require("webpack");

webpack(
    {
        // Configuration Object
    }, 
    (err, stats) => {
        if (err || stats.hasErrors()) {
            // Handle errors here
        }
        // Done processing
    }
);
``` 


https://github.com/webpack/enhanced-resolve









## lazy load React

https://webpack.js.org/guides/lazy-load-react/

https://webpack.js.org/guides/lazy-load-react/




## task-test-runner


https://webpack.js.org/guides/task-test-runner/



https://www.npmjs.com/package/gulp-webpack



## webpack-and-typescript

https://webpack.js.org/guides/webpack-and-typescript/









