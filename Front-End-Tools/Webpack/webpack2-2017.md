# webpack 2 2017



https://github.com/xgqfrms-GitHub/webpack2/blob/master/README.md


https://github.com/xgqfrms-GitHub/webgeeker/tree/gh-pages/webpack2


https://doc.webpack-china.org/guides/migrating/



https://webpack2.xgqfrms.xyz/





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







sass 命令行编译

https://www.w3cplus.com/sassguide/compile.html

$ sass --watch sassFileDirectory:cssFileDirectory


https://github.com/xgqfrms-GitHub/webgeeker/issues/7





