const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist'),
};

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8888,
        overlay: {
            errors: true,
            warnings: true
        }
    },
    entry: {
        app: PATHS.app,
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
    },
    module
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 2/3 & HtmlWebpackPlugin',
        }),
    ],
};


// 默认情况下，如果一个目录包含 index.js，入口解决了 index.js。



