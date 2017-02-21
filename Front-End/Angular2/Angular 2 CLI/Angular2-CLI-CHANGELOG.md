# Angular2-CLI-CHANGELOG





Angular2  CLI v1.0.0-beta.32 (Verified)


v1.0.0-beta.32 (Verified)  

## update 

```sh
$ ng -v

$ npm i -g angular-cli

$ npm i -g @angular/cli

$ npm i -g @angular/cli


$ npm cache clean

$ npm install -g @angular/cli@latest


``` 


https://github.com/angular/angular-cli/blob/master/CHANGELOG.md#features-2

https://github.com/angular/angular-cli/commit/601f9b3

https://github.com/angular/angular-cli/pull/4328

https://github.com/angular/angular-cli/issues/4861







angular-cli => @angular/cli


https://github.com/angular/angular-cli




Scaffold    Usage
Component   ng g component my-new-component
Directive   ng g directive my-new-directive
Pipe    ng g pipe my-new-pipe
Service ng g service my-new-service
Class   ng g class my-new-class
Interface   ng g interface my-new-interface
Enum    ng g enum my-new-enum
Module  ng g module my-module




Updating Angular CLI

To update Angular CLI to a new version, you must update both the global package and your project's local package.

Global package:

npm uninstall -g angular-cli @angular/cli
npm cache clean
npm install -g @angular/cli@latest
Local project package:

rm -rf node_modules dist # use rmdir on Windows
npm install --save-dev @angular/cli@latest
npm install













