
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader', 'sass-loader'],
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
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true,
            options: {
                context: __dirname
            }
        })
    ]
}








// ES2015 的代码分割 (懒加载)


// ES5


require.ensure([], function(require) {
    var foo = require("./module");
});



// ES6


function onClick() {
    import("./module")
    .then(module => {
        return module.default;
    })
    .catch(err => {
        console.log("Chunk loading failed!");
    });
}




function route(path, query) {
    return import(`./routes/${path}/route`)
        .then(route => new route.Route(query));
}
// 上面代码为每个可能的路由创建独立的 chunk





// 模板字符串

require(`./templates/${name}`);
















