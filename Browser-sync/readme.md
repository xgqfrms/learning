# browser-sync  


https://github.com/xgqfrms-GitHub/browser-sync  

https://github.com/xgqfrms-GitHub/browser-sync/blob/master/README.md  



```sh
$ npm install -g browser-sync

$ npm i -S browser-sync
``` 

## run

```sh
$ browser-sync start --server --files "./*.*"

``` 




```code
PS G:\wwwRoot\AngularJS\Angular-1.5.8-App\000-imooc-form-validation> browser-sync start
[BS] Copy the following snippet into your website, just before the closing </body> tag
<script id="__bs_script__">//<![CDATA[
    document.write("<script async src='http://HOST:3001/node_modules/browser-sync/browser-sync-client.js?v=2.18.1'><\/script>".replace("HOST", location.hostname));
//]]></script>

[BS] Access URLs:
 -------------------------------------
          UI: http://localhost:3002
 -------------------------------------
 UI External: http://192.168.56.1:3002
 -------------------------------------

``` 

```sh
$ browser-sync --help

$ browser-sync start --help

$ browser-sync start

$ browser-sync init --help

$ browser-sync reload --help

# 食谱
$ browser-sync recipe --help
``` 

```PS

PS G:\wwwRoot\AngularJS\Angular-1.5.8-App\000-imooc-form-validation> browser-sync --help
Commands:
  start   Start the server
  init    Create a configuration file
  reload  Send a reload event over HTTP protocol
  recipe  Generate the files for a recipe

Options:
  --version  Show version number                                       [boolean]

For help running a certain command, type <command> --help
eg:
C:\Users\xray\AppData\Roaming\npm\node_modules\browser-sync\bin\browser-sync.js
start --help

PS G:\wwwRoot\AngularJS\Angular-1.5.8-App\000-imooc-form-validation> browser-sync start --help
Usage:
C:\Users\xray\AppData\Roaming\npm\node_modules\browser-sync\bin\browser-sync.js
start [options]

Options:
  --version               Show version number                          [boolean]
  --server, -s            Run a Local server (uses your cwd as the web root)
  --serveStatic, --ss     Directories to serve static files from         [array]
  --port                  Specify a port to use                         [number]
  --proxy, -p             Proxy an existing server
  --ws                    Proxy mode only - enable websocket proxying  [boolean]
  --browser, -b           Choose which browser should be auto-opened     [array]
  --files, -f             File paths to watch                            [array]
  --index                 Specify which file should be used as the index page
                                                                        [string]
  --plugins               Load Browsersync plugins                       [array]
  --extensions            Specify file extension fallbacks               [array]
  --startPath             Specify the start path for the opened browser [string]
  --https                 Enable SSL for local development
  --directory             Show a directory listing for the server      [boolean]
  --xip                   Use xip.io domain routing                    [boolean]
  --tunnel                Use a public URL
  --open                  Choose which URL is auto-opened (local, external or
                          tunnel), or provide a url                     [string]
  --cors                  Add Access Control headers to every request  [boolean]
  --config, -c            Specify a path to a configuration file        [string]
  --host                  Specify a hostname to use
  --logLevel              Set the logger output level (silent, info or debug)
  --reload-delay          Time in milliseconds to delay the reload event
                          following file changes                        [number]
  --reload-debounce       Restrict the frequency in which browser:reload events
                          can be emitted to connected clients           [number]
  --ui-port               Specify a port for the UI to use              [number]
  --no-notify             Disable the notify element in browsers
  --no-open               Don't open a new browser window
  --no-online             Force offline usage
  --no-ui                 Don't start the user interface
  --no-ghost-mode         Disable Ghost Mode
  --no-inject-changes     Reload on every file change
  --no-reload-on-restart  Don't auto-reload all browsers following a restart
  --help                  Show help                                    [boolean]

Examples:
  C:\Users\xray\AppData\Roaming\npm\node_m  - Use the App directory to serve
  odules\browser-sync\bin\browser-sync.js   files
  start -s app
  C:\Users\xray\AppData\Roaming\npm\node_m  - Proxy an existing website
  odules\browser-sync\bin\browser-sync.js
  start -p www.bbc.co.uk

PS G:\wwwRoot\AngularJS\Angular-1.5.8-App\000-imooc-form-validation>
``` 


```PS

PS G:\wwwRoot\AngularJS\Angular-1.5.8-App\000-imooc-form-validation> browser-sync init --help
Usage:
C:\Users\xray\AppData\Roaming\npm\node_modules\browser-sync\bin\browser-sync.js
init

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]

Examples:
  C:\Users\xray\AppData\Roaming\npm\node_m
  odules\browser-sync\bin\browser-sync.js
  init

PS G:\wwwRoot\AngularJS\Angular-1.5.8-App\000-imooc-form-validation> browser-sync reload --help
Usage:
C:\Users\xray\AppData\Roaming\npm\node_modules\browser-sync\bin\browser-sync.js
reload

Options:
  --version    Show version number                                     [boolean]
  --files, -f  File paths to reload                                      [array]
  --port, -p   Target a running instance by port number                 [number]
  --url, -u    Provide the full the url to the running Browsersync instance
  --help       Show help                                               [boolean]

Examples:
  C:\Users\xray\AppData\Roaming\npm\node_m
  odules\browser-sync\bin\browser-sync.js
  reload
  C:\Users\xray\AppData\Roaming\npm\node_m
  odules\browser-sync\bin\browser-sync.js
  reload --port 4000

PS G:\wwwRoot\AngularJS\Angular-1.5.8-App\000-imooc-form-validation>


``` 

```PS

PS G:\wwwRoot\AngularJS\Angular-1.5.8-App\000-imooc-form-validation> browser-sync recipe --help
Usage:
C:\Users\xray\AppData\Roaming\npm\node_modules\browser-sync\bin\browser-sync.js
recipe <recipe-name>

Options:
  --version     Show version number                                    [boolean]
  --output, -o  Specify an output directory
  --help        Show help                                              [boolean]

Examples:
  C:\Users\xray\AppData\Roaming\npm\node_m  list the recipes
  odules\browser-sync\bin\browser-sync.js
  recipe ls
  C:\Users\xray\AppData\Roaming\npm\node_m  use the gulp.sass recipe
  odules\browser-sync\bin\browser-sync.js
  recipe gulp.sass

PS G:\wwwRoot\AngularJS\Angular-1.5.8-App\000-imooc-form-validation>
``` 









