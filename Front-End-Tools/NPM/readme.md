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









