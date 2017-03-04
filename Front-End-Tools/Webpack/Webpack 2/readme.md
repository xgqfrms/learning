# Webpack 2


https://webpack.js.org/guides/get-started/












## A Beginner’s Guide to Webpack 2 and Module Bundling


https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling  


By Mark Brown  January 30, 2017




https://github.com/markbrown4/webpack-demo


https://github.com/sitepoint-editors/webpack-demo/tree/master/src






https://webpack.js.org/concepts/entry-points/#scenarios

https://github.com/ufo-github/extract-text-webpack-plugin

.icon-link:before {
    content: "\F109";
}







https://github.com/sitepoint-editors/MicroBlog

https://github.com/beautifulcoder/MicroBlog







https://webpack.js.org/plugins/commons-chunk-plugin/




https://webpack.js.org/guides/get-started/




## webpack 2


https://medium.com/modus-create-front-end-development/webpack-2-tree-shaking-configuration-9f1de90f3233#.5vkffluek

https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.gwgcotced




旧的任务运行器(task runner )方式：
您的标记，样式和JavaScript是隔离的。
你必须分别管理每一个，这是你的工作，以确保一切正常到生产。

webpack的方式：
如果webpack知道它，它只捆绑你*实际*使用到生产。


https://medium.com/webpack/webpack-2-and-beyond-40520af9067f#.hv6ogf4w0




https://github.com/webpack-china

https://doc.webpack-china.org/

https://doc.webpack-china.org/guides/get-started/


https://stackoverflow.com/questions/tagged/webpack



Local Installation

$ npm install webpack --save-dev

$ npm install webpack@<version> --save-dev


If you are using npm scripts in your project, npm will try to look for webpack installation in your local modules for which this installation technique is useful.

"scripts": {
    "start": "webpack --config mywebpack.config.js"
}

This is standard and recommended practice.


To run the local installation of webpack you can access its bin version as 

node_modules/.bin/webpack


./node_modules/.bin/webpack --help 
# 显示有效的 CLI 命令列表

.\node_modules\.bin\webpack --help 
# windows 用户请使用此路径


要在 index.js 中打包 lodash 依赖，首先我们需要安装 lodash。

$ npm install --save lodash


import _ from 'lodash';


<script src="dist/bundle.js"></script>



./node_modules/.bin/webpack app/index.js dist/bundle.js

## Using webpack with a config

webpack.config.js

var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};


## Using webpack with npm

{
  ...
  "scripts": {
    "build": "webpack"
  },
  ...
}


$ npm run build



https://webpack.js.org/guides/get-started/




https://doc.webpack-china.org/guides/migrating/

https://doc.webpack-china.org/guides/comparison/




https://github.com/webpack-china/awesome-webpack-cn




$ npm i webpack -S

$ npm i lodash -S

$ npm run build


$ npm run test





