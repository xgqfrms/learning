# commenting engine  





$ npm start  

$ npm dist

$ npm serve:dist  

$ npm serve  


http://localhost:8000/webpack-dev-server/

http://localhost:8000/


# generator-react-webpack  


https://github.com/react-webpack-generators/generator-react-webpack#readme


"dist": "npm run copy & webpack --env=dist",
"lint": "eslint ./src",

"serve": "node server.js --env=dev",
"serve:dist": "node server.js --env=dist",
"start": "node server.js --env=dev",


*******************************************************************************
*******************************************************************************


## generator-react-webpack 


$ yo react-webpack




https://github.com/react-webpack-generators/generator-react-webpack#readme


## yeoman  


# Make sure both is installed globally

$ npm install -g yo
$ npm install -g generator-react-webpack


# Create a new directory, and `cd` into it:

$ mkdir my-new-project && cd my-new-project


# Run the generator

$ yo react-webpack

$ scss
$ N

$ yarn install ???

*******************************************************************************
???

index.html ? momery : cache 

<script type="text/javascript" src="/assets/app.js"></script>

??? 

*******************************************************************************

# After setup of course :)

$ cd my-new-project
$ yo react-webpack:component my/namespaced/components/name


# Generating new stateless functional components

$ yo react-webpack:component my/namespaced/components/name --stateless


*******************************************************************************
*******************************************************************************


## npm script comand error (package.json)

??? npm run ???

***************************************
# error  
$ npm serve:dist

# OK  
$ npm run serve:dist

# webpack build ./dist/
$ npm run dist

***************************************


Usage: npm <command>

where <command> is one of:
    access, adduser, bin, bugs, c, cache, completion, config,
    ddp, dedupe, deprecate, dist-tag, docs, edit, explore, get,
    help, help-search, i, init, install, install-test, it, link,
    list, ln, login, logout, ls, outdated, owner, pack, ping,
    prefix, prune, publish, rb, rebuild, repo, restart, root,
    run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, team, test, tst, un, uninstall,
    unpublish, unstar, up, update, v, version, view, whoami

npm <cmd> -h     quick help on <cmd>
npm -l           display full usage info
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    C:\Users\xray\.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@4.0.5 C:\Users\xray\AppData\Roaming\npm\node_modules\npm



"scripts": {
    "clean": "rimraf dist/*",
    "copy": "copyfiles -f ./src/index.html ./src/favicon.ico ./dist",
    "dist": "npm run copy & webpack --env=dist",
    "lint": "eslint ./src",
    "posttest": "npm run lint",
    "release:major": "npm version major && npm publish && git push --follow-tags",
    "release:minor": "npm version minor && npm publish && git push --follow-tags",
    "release:patch": "npm version patch && npm publish && git push --follow-tags",
    "serve": "node server.js --env=dev",
    "serve:dist": "node server.js --env=dist",
    "start": "node server.js --env=dev",
    "test": "karma start",
    "test:watch": "karma start --autoWatch=true --singleRun=false"
},







*******************************************************************************

--env=dev & --env=dist

"serve": "node server.js --env=dev",
"serve:dist": "node server.js --env=dist",

??? npm run ???

***************************************
# error 
$ npm serve
$ npm serve:dist

# OK  
$ npm run serve
$ npm run serve:dist

***************************************



*******************************************************************************










*******************************************************************************




















