# Node-CLI-Tools




https://github.com/xgqfrms-GitHub/Node-CLI-Tools



## Node.js CLI 

一、请开发一个 Node.js CLI 工具:

查看指定 git 仓库的 commit history ; 
能对 commit history 进行搜索; 
能查看指定时间范围的 commit history. 

https://node-cli-tools.xgqfrms.xyz





# Linux 学习笔记分享


http://www.imooc.com/article/4777

Linux 用户组的权限: drwx------ 700权限(d 目录 ,r=4,w=2,x=1:rwx=7;---=0;---=0)


-rwxr-xr-x 755 权限


在linux下使用命令 ll 或ls -l 或ls -al 的时候会看到这些字眼，这些字符表示为不同用户组的权限:

r: read 就是读权限 -- 数字4表示
w: write 就是写权限 -- 数字2表示
x: excute 就是执行权限 -- 数字1表示

这里总共会有10个“-”，共分4个组.

第一个表示文件类型，如该文件是文件(- 表示)，文件夹(d 表示),连接文件(l 表示);

后面 9个按照3个分一组

-rwxrwx--- 770 权限, 表示此文件(文件夹)的拥有着和同组用户有读,写及执行权限， 其他用户组没任何权限


Linux下的文件类型如下：

- 普通文件
d 目录
l 链接文件
b 块设备
c 字符设备




作者： xgqfrms2015 
链接：http://www.imooc.com/article/4777
来源：慕课网




https://github.com/shelljs/shelljs





> yargs 模块提供 argv 对象，用来读取命令行参数

```sh
    
$ npm install --save yargs


```

#!/usr/bin/env node
var argv = require('yargs').argv;

console.log('hello ', argv.name);




$ hello --name=tom
hello tom

$ hello --name tom
hello tom



https://git-scm.com/book/zh/v1/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2



https://github.com/jaywcjlove/wcj

http://jaywcjlove.github.io/wcj/


https://guoyongfeng.github.io/book/01/04-git%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html




{
    "name": "hello",
    "bin": {
        "hello": "hello"
    }
}



https://github.com/tj/commander.js

https://sfantasy.gitbooks.io/node-in-action/content/zh/cli/


https://github.com/tj/commander.js/tree/master/examples


https://github.com/xgqfrms-GitHub/Node-CLI-Tools/issues/2



https://github.com/tj/commander.js

https://github.github.io/fetch/

https://github.com/request/request




https://www.npmjs.com/package/colors




# sudo npm link ???


https://github.com/xgqfrms-GitHub/Node-CLI-Tools/wiki/npm-link

























