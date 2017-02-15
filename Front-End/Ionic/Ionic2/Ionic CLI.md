# Ionic CLI




## Ionic CLI



http://ionicframework.com/docs/v2/cli/

Ionic CLI是开发Ionic应用程序过程中使用的主要工具。

它就像一个瑞士军刀：它在一个界面下汇集了一堆杂项工具。

CLI包含许多对Ionic开发至关重要的命令，例如start，build，serve和run。


它还包含emulate 和 info等命令，这在某些情况下可能是有帮助的。

仿真 信息










$ npm install -g ionic

$ ionic start myAwesomeApp --v2

> cd myAwesomeApp

$ ionic info

$ ionic serve





$ ionic







## build

Command Description

ionic build 
// Locally build an Ionic project for a given platform

Flags 

--nohooks|-n 
// Do not add default Ionic hooks for Cordova



## Cordova’s build command

The build command is a proxy for Cordova’s build command.

https://cordova.apache.org/docs/en/latest/guide/cli/index.html#link-5



## emulate

Command Description

ionic emulate 
// Emulate an Ionic project on a simulator or emulator

Flags 

--livereload|-l 
--address   
--port|-p   
--livereload-port|-r 
--consolelogs|-c 
// Print app console logs to Ionic CLI (livereload req.)
--serverlogs|-s 
// Print dev server logs to Ionic CLI (livereload req.)
--debug|--release 
--device|--emulator|--target=FOO


## generator 

Ionic现在提供了一个生成器功能来为您的应用程序创建页面和服务。

To create a page you can use the following command:

# ionic g page <PageName>

ionic g page myPage

√ Create app/pages/my-page/my-page.html
√ Create app/pages/my-page/my-page.ts
√ Create app/pages/my-page/my-page.scss



To create a service, you can replace page with provider:

ionic g provider MyData

√ Create app/providers/my-data/my-data.ts



## info

Command Description

ionic info  
// List information about the users runtime environment




## platform

Command Description

ionic platform
// Add platform target for building an Ionic app

Flags 

--noresources|-r
// Do not add default Ionic icons and splash screen resources

--nosave|-e 
// Do not save the platform to the package.json file



## run

Command Description

ionic run
// Run an Ionic project on a connected device

Flags 

--livereload|-l 
--address   
--port|-p   
--livereload-port|-r

--consolelogs|-c 
// Print app console logs to Ionic CLI (livereload req.)

--serverlogs|-s
//Print dev server logs to Ionic CLI (livereload req.)

--debug|--release   
--device|--emulator|--target=FOO




## serve

Command Description

ionic serve 
// Start a local development server for app dev/testing

Flags 

--consolelogs|-c    Print app console logs to Ionic CLI
--serverlogs|-s Print dev server logs to Ionic CLI
--port|-p   
--livereload-port|-r    
--nobrowser|-b  Disable launching a browser
--nolivereload|-d   Do not start live reload
--noproxy|-x    Do not add proxies
--address   
--all|-a    Have the server listen on all addresses (0.0.0.0)
--browser|-w    
--browseroption|-o  
--lab|-l    Test your apps on multiple screen sizes and platform types
--nogulp    Disable running gulp during serve
--platform|-t   



## start

Command Description

ionic start 
// Starts a new Ionic project in the specified PATH

Flags 

--appname|-a    
--id|-i 
--no-cordova|-w Create a basic structure without Cordova requirements
--sass|-s   Setup the project to use Sass CSS precompiling
--list|-l   List starter templates available
--io-app-id 
--template|-t   
--zip-file|-z   



















