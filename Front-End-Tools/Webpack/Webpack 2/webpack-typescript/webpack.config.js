module.exports = {
    entry: './index.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            loader: "source-map-loader"
        }, {
            enforce: 'pre',
            test: /\.tsx?$/,
            use: "source-map-loader"
        }]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'inline-source-map',
};

/*

module.exports = {
    entry: './index.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        }, ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};

*/
