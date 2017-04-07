const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/app.js'],
    output: {
        path: './dist',
        filename: '[name].[hash:8].bundle.js'
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.scss$/,
                use: extractTextWebpackPlugin.extract(
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'sass-loader'],
                    publichPath: '/dist'
                )
            }
        ]
    }
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack2-app',
            template: 'index.ejs',
            minify: {
                collapseWhitespace: true
            },
            hash: true
        }),
        new extractTextWebpackPlugin({
            filename: '[name].[hash].css',
            allChunks: true
        })
    ]
}