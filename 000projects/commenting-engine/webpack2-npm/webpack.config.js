const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/app.js'],
    output: {
        path: './dist',
        filename: '[name].[hash:8].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}