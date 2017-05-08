/*const path = require('path');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: './new-app.js',
    },
    // entry: './src/new-app.js',
    output: {
        filename: 'bundle.js',
        // bundle.js
        // filename: '[name].bundle.js',
        // main.bundle.js
        path: path.resolve(__dirname, 'dist')
    }
};
*/


var webpack = require('webpack');
var path = require('path');

module.exports = function(env) {
    return {
        entry: {
            main: './src/index.js'
            // vendor: 'moment'
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                // 指定公共 bundle 的名字。
                minChunks: function (module) {
                   // 该配置假定你引入的 vendor 存在于 node_modules 目录中
                   return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
            })
        ]
    }
}
