# VS code configuration  

## stackoverflow  

http://stackoverflow.com/questions/30140595/show-whitespace-characters-in-visual-studio-code/40081253#40081253  


## configuration

```codes
# Show whitespace characters in Visual Studio Code

// Place your settings in this file to overwrite default and user settings.
{
    "editor.renderWhitespace": "all"
}

``` 



## my configuration

```json
// Place your settings in this file to overwrite the default settings
{
    "typescript.check.tscVersion": true,
    "files.autoSave": "afterDelay",
    "files.associations": { "*.js": "javascript" },
    "editor.renderWhitespace": "all",
    "editor.tabCompletion": true,
    "editor.mouseWheelZoom": true,
    "editor.formatOnSave": false,
    "html.format.wrapLineLength": 80,
    "editor.wrappingColumn": 100,
    "html.format.enable": false,
    "html.format.extraLiners": "/body",
    "workbench.statusBar.visible": true
}
``` 

http://www.jianshu.com/p/80e983201f86

## 调整行高

// Place your settings in this file to overwrite the default settings
{
    "typescript.tsdk": "./ng2-app/node_modules/typescript/lib",
    "typescript.check.tscVersion": false,
    "typescript.check.workspaceVersion": false,
    "editor.tabCompletion": true,
    "editor.mouseWheelZoom": true,
    "editor.lineHeight": 24,
    "editor.fontSize": 13,
    "editor.formatOnSave": false,
    "html.format.wrapLineLength": 80,
    "editor.wrappingColumn": 80,
    "html.format.enable": false,
    "html.format.extraLiners": "/body",
    "workbench.statusBar.visible": true,
    "editor.renderWhitespace": "all"
}

Extensions

@recommended:keymaps


https://code.visualstudio.com/docs/customization/locales


zh-CN


locale.json

Ctrl+Shift+P

"locale":"zh-CN"


{
    // Defines VSCode's display language.
    // See https://go.microsoft.com/fwlink/?LinkId=761051 for a list of supported languages.
    // Changing the value requires to restart VSCode.
    "locale":"en"
}


"locale": "en-US"