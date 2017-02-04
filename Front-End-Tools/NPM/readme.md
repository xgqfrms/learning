# npm


https://www.npmjs.com/~xgqfrms  

https://docs.npmjs.com/  

https://docs.npmjs.com/getting-started/publishing-npm-packages  


## Publishing npm packages  
https://www.youtube.com/watch?v=BkotrAFtBM0  


https://github.com/xgqfrms-GitHub/ng2seed/  

package.json 

```sh
$ npm adduser

???

``` 

## npm CLI 

https://docs.npmjs.com/cli/install  

```sh
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <tarball file>
npm install <tarball url>
npm install <folder>

alias: npm i
common options: [-S|--save|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [--dry-run]
``` 



https://docs.npmjs.com/files/package.json  

https://docs.npmjs.com/cli/version  

https://docs.npmjs.com/cli/ls  

https://docs.npmjs.com/cli/config  

https://docs.npmjs.com/files/folders  

https://docs.npmjs.com/misc/scope  


***********************************************************************


## version range

https://docs.npmjs.com/files/package.json  

https://docs.npmjs.com/misc/semver  

^ Compatible with version  

```codes
version Must match version exactly
>version Must be greater than version
>=version etc
<version
<=version
~version "Approximately equivalent to version" See semver
^version "Compatible with version" See semver
1.2.x 1.2.0, 1.2.1, etc., but not 1.3.0
http://... See 'URLs as Dependencies' below
* Matches any version
"" (just an empty string) Same as *
version1 - version2 Same as >=version1 <=version2.
range1 || range2 Passes if either range1 or range2 are satisfied.
git... See 'Git URLs as Dependencies' below
user/repo See 'GitHub URLs' below
tag A specific version tagged and published as tag See npm-tag
path/path/path See Local Paths below
``` 


*******************************************************************************
*******************************************************************************

G:\wwwRoot\learning\Back-End\Node.js\npm



G:\wwwRoot\learning\000projects\commenting-engine\readme.md


$ npm run [commands] 


*******************************************************************************
G:\wwwRoot\learning\000projects\commenting-engine\readme.md
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
*******************************************************************************






