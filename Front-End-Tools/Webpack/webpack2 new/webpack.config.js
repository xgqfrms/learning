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
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "app")
                ],
                exclude: [
                    path.resolve(__dirname, "app/demo-files")
                ],
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            },
            {
                test: "/\.scss$/",
                use: ["style-loader", "style-loader", "style-loader"]
            },
            {
                test: "/\.css$/",
                use: {
                    loader: 'css-loader',
                    options: {
                        base: 2000
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            base: 2000,
                            transform: 'path/to/conditional.js',
                            attrs: {
                                id: 'id'
                            },
                            singleton: true,
                            insertAt: 'top',
                            insertAt: '#host::shadow>#root',
                            sourceMap: true,
                            convertToAbsoluteUrls: true
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            }, 
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'image/png',
                            prefix: 'img'
                        }
                    }
                ]
            },
            {
                test: "\.html$",
                use: [
                    "htmllint-loader", 
                    {
                        loader: "html-loader",
                        options: {
                            /* ... */
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 2/3 & HtmlWebpackPlugin',
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
                context: __dirname
            }
        })
    ],
};


// 默认情况下，如果一个目录包含 index.js，入口解决了 index.js。



new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    options: {
        context: __dirname
    }
}),


module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    }
};



{
    test: /\.css$/,
    loader: 'css-loader'
}
// or equivalently
{
    test: /\.css$/,
    use: 'css-loader'
}
// or equivalently
{
    test: /\.css$/,
    use: {
        loader: 'css-loader',
        options: {
            /**/ 
        }
    }
}



{
    test: /\.css$/,
    use: [
        {
            loader: 'style-loader'
        }, 
        {
            loader: 'css-loader',
            options: {
                modules: true
            }
        }
    ]
}


{
    test: /\.scss$/,
    use: [
        {
            loader: 'style-loader'
        }, 
        {
            loader: 'css-loader',
            options: {
                modules: true
            }
        },
        {
            loader: 'sass-loader'
        }
    ]
}




module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}




```sh




$ npm install --save-dev extract-text-webpack-plugin


$ npm i -D extract-text-webpack-plugin

$ yarn add -D extract-text-webpack-plugin


```



module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ]
}



{
    test: /\.css$/,
    use: [
        {
            loader: 'style-loader',
            options: {
                base: 2000
            }
        },
        'css-loader'
    ]
}


{
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader'
    ]
}



{
    loader: 'style-loader'
    options: {
        transform: 'path/to/transform.js'
    }
}



// transform.js

module.exports = function(css) {
    const transformed = css.replace('.classNameA', '.classNameB');
    return transformed;
}



{
    loader: 'style-loader'
    options: {
        insertAt: 'top'
    }
}



{
    loader: 'style-loader'
    options: {
        insertAt: '#host::shadow>#root'
    }
}



{
    loader: 'style-loader'
    options: {
        singleton: true
    }
}



{
    loader: 'style-loader'
    options: {
        sourceMap: true
    }
}


{
    loader: 'style-loader'
    options: {
        sourceMap: true,
        convertToAbsoluteUrls: true
    }
}




{
    test: /\.(png|svg|jpg|gif)$/,
    use: [
        'file-loader'
    ]
}




{
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
        'file-loader'
    ]
}



{
    test: /\.(csv|tsv)$/,
    use: [
        'csv-loader'
    ]
}


{
    test: /\.xml$/,
    use: [
        'xml-loader'
    ]
}








{
    test: /\.(png|jpg|gif)$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 8192
            }
        }
    ]
}




module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader"
                    // creates style nodes from JS strings
                },
                {
                    loader: "css-loader"
                    // translates CSS into CommonJS
                },
                {
                    loader: "sass-loader"
                    // compiles Sass to CSS
                }
            ]
        }]
    }
};



module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["absolute/path/a", "absolute/path/b"]
                    }
                }
            ]
        }]
    }
};











module.exports = {
    devtool: "source-map", // any "source-map"-like devtool is possible
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader", 
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader", 
                    options: {
                        sourceMap: true,
                        data: "$env: " + process.env.NODE_ENV + ";"
                    }
                }
            ]
        }]
    }
};










const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [
                    {
                        loader: "css-loader"
                    },{
                        loader: "sass-loader"
                    }
                ],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass
    ]
};





{
    module: {
        rules: [
            {
                test: /\.jpg$/,
                use: ["file-loader"]
            },
            {
                test: /\.png$/,
                use: ["url-loader?mimetype=image/png"]
            }
        ]
    },
    output: {
        publicPath: "http://cdn.example.com/[hash]/"
    }
}




module: {
    rules: [{
        test: /\.html$/,
        use: [
            {
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }
        ]
    }]
}




module: {
    rules: [{
        test: /\.html$/,
        use: [
            {
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeComments: false,
                    collapseWhitespace: false
                }
            }
        ],
    }]
}




var path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    },
    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/],
        root: path.resolve(__dirname, 'assets'),
        attrs: ['img:src', 'link:href']
    }
};



module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader?config=otherHtmlLoaderConfig"]
            }
        ]
    },
    otherHtmlLoaderConfig: {}
};



{
    test: /\.html$/,
    use: ['file-loader?name=[path][name].[ext]!extract-loader!html-loader']
}




module.exports = {
    module: {
        rules: [
            {
                test: /\.gz$/,
                enforce: 'pre',
                use: 'gzip-loader'
            }
        ]
    }
}






