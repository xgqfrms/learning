const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: ['./src/app.js'],
    output: {
        path: './dist',
        filename: '[name].[hash:8].bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack2-app',
            template: 'index.ejs',
            minify: {
                collapseWhitespace: true
            },
            hash: true
        })
    ]
}