# webpack next & tutorials


## step 1

> install

Node.js & NPM/NVM

```sh
$ node -v & npm -v

```

```sh
$ npm init -y

```

```json

{
  "name": "webpack-next",
  "version": "1.0.0",
  "description": "> install",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```


```sh
$ npm  -g webpack
# not a recommended practice

$ npm i -D webpack
# node_modules/.bin/webpack


$ npm i -D webpack@latest

# "start": "webpack --config webpack.config.js"

```

# utils

```sh
# Lint
$ npm i -D eslint

# ES6
$ npm i -D babel-cli babel-preset-env
$ npm i -D babel-preset-react

$ npm i -D babel-loader babel-core babel-preset-env babel-polyfill

```

# .babelrc

```json

{
    "presets": ["env"]
}

```
http://babeljs.io/docs/setup#webpack
http://babeljs.io/repl/


https://github.com/babel/babel-loader
http://babeljs.io/docs/plugins
http://babeljs.io/docs/usage/babelrc

http://babeljs.io/docs/usage/babelrc#env-option
https://babeljs.io/docs/plugins/preset-env/

http://babeljs.io/docs/usage/polyfill

```json

{
  "plugins": ["transform-react-jsx"],
  "ignore": [
    "foo.js",
    "bar/**/*.js"
  ]
}

```
> env

```json

{
  "env": {
    "production": {
      "plugins": ["transform-react-constant-elements"]
    }
  }
}

```

```json
{
  "presets": [
    ["env", {
      "targets": {
        "node": "current",
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ]
}

```



## npm-scripts

https://docs.npmjs.com/misc/scripts#default-values
https://docs.npmjs.com/files/package.json
https://docs.npmjs.com/cli/run-script
https://docs.npmjs.com/cli/start
https://docs.npmjs.com/cli/test
https://docs.npmjs.com/cli/restart


https://docs.npmjs.com/files/npmrc
https://docs.npmjs.com/misc/config

https://docs.npmjs.com/cli/publish
https://docs.npmjs.com/misc/developers
https://docs.npmjs.com/cli/adduser
https://registry.npmjs.org/






```sh

# To upgrade, run:
$ [sudo] npm i -g npm@latest

```


# test

```sh

$ mkdir src && cd src && touch index.js index.html index.css && cd ../
$ cd src && echo console.log("hello world"); >> index.js

# echo console.log("hello world"); > index.js

```



# migrating

https://webpack.js.org/guides/migrating/#src/components/Sidebar/Sidebar.jsx

https://webpack.js.org/guides/migrating/#extracttextwebpackplugin-breaking-change

https://webpack.js.org/guides/migrating/#extracttextplugin-extract




https://github.com/gildata/RAIO-new/issues/6


