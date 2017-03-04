# Command Line Interface (CLI)  



https://webpack.js.org/api/cli/


## Build source using a config file

Specifies a different configuration file to pick up. Use this if you want to specify something different than webpack.config.js, which is the default.

$ webpack --config example.config.js


## Specify build environment

Send environment variable to be used in webpack config file.

$ webpack --env.production    # sets production to true
$ webpack --env.platform=web  # sets platform to "web"


## Print result of webpack as a JSON

$ webpack --json
$ webpack --json > stats.json



https://webpack.js.org/configuration/configuration-types/

https://github.com/th0r/webpack-bundle-analyzer




https://chrisbateman.github.io/webpack-visualizer/


https://github.com/chrisbateman/webpack-visualizer


http://webpack.github.io/analyse/





https://webpack.js.org/api/cli/#example-usage


webpack index=./src/index.js index2=./src/index2.js --output-path='./dist' --output-filename='[name][hash].bundle.js'



webpack.js index=./src/index.js index2=./src/index2.js --output-path='./dist' --output-filename='[name][hash].bundle.js' --devtool source-map --output-source-map-filename='[name]123.map'






## Node.js API


https://webpack.js.org/api/node/





