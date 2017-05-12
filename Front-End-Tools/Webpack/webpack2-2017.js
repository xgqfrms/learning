
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: ['style-loader', 'css-loader', 'sass-loader'],
                fallback: "style-loader",
                publicPath: "/dist"
            })
        }]
    },
    devtool: "source-map",
    plugins: [
        new ExtractTextPlugin({
            filename: "bundle.css",
            disable: false,
            allChunks: true
        }),
        new UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: true
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.BannerPlugin({
            banner: 'Banner', 
            raw: true, 
            entryOnly: true
        })
    ]
}

