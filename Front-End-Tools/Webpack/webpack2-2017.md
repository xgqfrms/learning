# webpack 2 2017


https://github.com/xgqfrms-GitHub/webpack2/master/README.md


https://github.com/xgqfrms-GitHub/webgeeker/tree/gh-pages/webpack2


https://doc.webpack-china.org/guides/migrating/









```js

$ npm i -D extract-text-webpack-plugin

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
}



```

















