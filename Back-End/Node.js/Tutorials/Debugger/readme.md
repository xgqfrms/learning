# Debugger  



https://nodejs.org/api/debugger.html




Stability: 2 - Stable
Node.js includes an out-of-process debugging utility accessible via a TCP-based protocol and built-in debugging client. To use it, start Node.js with the debug argument followed by the path to the script to debug; a prompt will be displayed indicating successful launch of the debugger:

$ node debug myscript.js

< debugger listening on port 5858
connecting... ok
break in /home/indutny/Code/git/indutny/myscript.js:1
    1 x = 5;
    2 setTimeout(() => {
    3   debugger;
debug>



Node.js's debugger client is not a full-featured debugger, but simple step and inspection are possible.

Node.js的调试器客户端不是一个全功能调试器，但简单的步骤和检查是可能的。





$ node debug node_debug.js



























[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/xgqfrms-GitHub/job-stack)











