# webpack 2

https://gist.github.com/xgqfrms-gildata/5acc4a357722e9e2636009fbd6846338

https://www.bilibili.com/video/av11128844/index_3.html




## cmd & webpack

```sh

# webpack [--config webpack.config.js]



$ webpack

$ webpack --config webpack.config.js



$ webpack -w

$ webpack --config webpack.config.js --watch





# sourceMaps & webpack-dev-server

$ webpack --config webpack.dev.config.js




# uglify & minify & clean & webpack -p

$ webpack --config webpack.prod.config.js





# node_modules/.bin/webpack

# webpack.cmd
# webpack-dev-server.cmd

# webpack <entry> [<entry>] <output>



$ webpack src/index.js dist/index.js

$ webpack src/app.js dist/app.js -w

# --watch / -w





```

https://webpack.js.org/api/cli/




## html-webpack-plugin

https://github.com/jantimon/html-webpack-plugin


https://webpack.js.org/plugins/html-webpack-plugin/


https://webpack.js.org/plugins/html-webpack-plugin/#components/sidebar/sidebar.jsx



```sh


$ npm install --save-dev html-webpack-plugin

$ npm i -D html-webpack-plugin

```








## extract-text-webpack-plugin


https://www.npmjs.com/package/extract-text-webpack-plugin

https://github.com/webpack-contrib/extract-text-webpack-plugin

https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/250

https://webpack.github.io/docs/stylesheets.html


https://webpack.js.org/plugins/extract-text-webpack-plugin/#components/sidebar/sidebar.jsx


```sh

# for webpack 2

$ npm install --save-dev extract-text-webpack-plugin

$ npm i -D extract-text-webpack-plugin

```





## webpack-dev-server 

> ??? webpack-dev-server & partly refresh



https://webpack.js.org/configuration/dev-server/#devserver


```js
devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8888
}


devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    https: true,
    hot: true,
    hotOnly: true,
    host: "127.0.0.1",
    port: 8888,
    allowedHosts: [
        'xgqfrms.xyz',
        'cdn.xgqfrms.xyz',
        'webpack2.xgqfrms.xyz',
        'webpack3.xgqfrms.xyz'
    ],
    headers: {
        "X-Custom-Foo": "bar"
    },
    historyApiFallback: true,
    lazy: true,
    overlay: {
        warnings: true,
        errors: true
    },
    proxy: {
        "/api": {
            target: "http://localhost:3000",
            pathRewrite: {
                "^/api" : ""
            },
            secure: false,
            bypass: function(req, res, proxyOptions) {
                if (req.headers.accept.indexOf("html") !== -1) {
                    console.log("Skipping proxy for browser request.");
                    return "/index.html";
                }
            }
        }
    },
    devServer.progress: true,
    publicPath: "http://localhost:8080/assets/",
    setup(app){
        app.get('/some/path', function(req, res) {
            res.json({ custom: 'response' });
        });
    },
    watchContentBase: true,
    watchOptions: {
        poll: true
    },
    filename: "bundle.js",
    clientLogLevel: "none"
}


devServer: {
    host: process.env.HOST, // Defaults to `localhost`
    port: 80, // Defaults to 8080
},




```

http://127.0.0.1:8888/

http://localhost:8888/


# devServer.host - CLI only

Specify a host to use. 
By default this is localhost. 
If you want your server to be accessible externally, specify it like this:

指定要使用的主机。
默认情况下是localhost。
如果您希望外部访问您的服务器，请如下指定：

> host: "0.0.0.0"


# NODE_ENV

linux & mac: export NODE_ENV=production

windows: set NODE_ENV=production


# https

https://nodejs.org/api/https.html

https://webpack.js.org/configuration/dev-server/#devserver-https




https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/



https://github.com/webpack/webpack-dev-server

https://github.com/webpack/webpack-dev-middleware




https://webpack.js.org/configuration/dev-server/#components/sidebar/sidebar.jsx

https://webpack.js.org/guides/development/


```sh

$ npm install --save-dev webpack-dev-server

$ npm i -D webpack-dev-server




# node_modules/.bin/webpack-dev-server.cmd

# http://localhost:8080.

$ node_modules/.bin/webpack-dev-server

``` 



# npm scripts


```json

"scripts": {
    "test": "webpack",
    "start": "webpack-dev-server --env development",
    "build": "webpack --env production"
}


"scripts": {
    "test": "webpack",
    "start": "webpack-dev-server --env -d",
    "build": "webpack --env -p"
}




// process.env.NODE_ENV="production"

// webpack -h

```

```sh

# npm run [commads name]


$ npm run dev

$ npm run prop

```

## process.env.NODE_ENV


```sh
# into node

$ node

$ > process.env

$ > process.env.NODE_ENV

# exit node

$ > .exit

# Ctrl + C, Ctrl + C

```

# node-cli-tools

https://github.com/xgqfrms-GitHub/Node-CLI-Tools/





# NODE_ENV

> NODE_ENV, Node-CLI-Tools

https://github.com/xgqfrms-GitHub/Node-CLI-Tools/issues/13

linux & mac: `export NODE_ENV=production`

windows: `set NODE_ENV=production`




# webpack CLI




```sh

> --context 

The root directory for resolving entry point and stats 
[string] [default: The current directory]


> --entry
The entry point  [string]

> --watch, -w

Watch the filesystem for changes [boolean]

> --debug

Switch loaders to debug mode




> --hot  

## hot module replacement

> --color

> --progress

> --devtool eval-cheap-module-source-map


>--json, -j

Prints the result as JSON.

> --env

> --define

Define any free var in the bundle

> -d 

shortcut for --debug --devtool eval-cheap-module-source-map --output-pathinfo  [boolean]

> -p 
shortcut for --optimize-minimize --define process.env.NODE_ENV="production"


```




# devtool


https://webpack.js.org/guides/development/



```js

devtool: "cheap-eval-source-map"

devtool: "inline-source-map"


```



webpack-dev-middleware


```sh

$ webpack --progress --watch


$ webpack-dev-server --open



# https://github.com/zeit/serve

$ npm install --save-dev serve

$ `npm bin`/serve

```

```js

"scripts": {
    "start": "serve"
}

```















