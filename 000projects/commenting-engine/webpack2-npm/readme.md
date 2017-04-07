# webpack 2

```sh

$ npm help json

$ npm view webpack versions

$ npm view webpack versions --json

```




```sh

$ webpack ./src/app.js ./dist/[name].[hash].bundle.js 

$ webpack ./src/app.js ./dist/[name].[hash].bundle.js -p

$ webpack ./src/app.js ./dist/[name].[hash].bundle.js -p ---watch

$ webpack ./src/*.js ./dist/[name].[hash].bundle.js -p ---watch

$ webpack ./src/**/.js ./dist/[name].[hash].bundle.js -p ---watch

# "dev": "webpack -d --watch"
$ npm run dev 

# "prod": "webpack -p"
$ npm run prod

```

open in browser (TechTR)

generator html


html-webpack-plugin


template
minify
hash



module.exports = {
    entry: ['./src/app.js'],
    output: {
        filename: './dist/app.bundle.js'
    }
}



# autoSave & trimAutoWhitespace bugs

"files.autoSave": "off",

"editor.trimAutoWhitespace": false,
























