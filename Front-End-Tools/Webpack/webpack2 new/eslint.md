# eslint


http://eslint.org/demo/




https://gist.github.com/xgqfrms-gildata/5acc4a357722e9e2636009fbd6846338#gistcomment-2132228

http://eslint.org/docs/user-guide/getting-started


## .eslintrc.js

> .eslintrc / .eslintrc.js / .eslintrc.json



"extends": "eslint:recommended"


http://eslint.org/docs/user-guide/configuring#extending-configuration-files



```js


module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",
    }
}



```



## eslintConfig & package.json


https://docs.npmjs.com/files/package.json



```json
"scripts": {
    "test": "webpack",
    "build": "webpack -p",
    "start": "webpack-dev-server",
    "lint": "eslint app/ webpack.*.js --cache"
},

```





http://eslint.org/docs/user-guide/formatters/

http://eslint.org/docs/rules/


"extends": "eslint:recommended"

http://eslint.org/docs/user-guide/configuring#extending-configuration-files



--fix 自动修复问题

http://eslint.org/docs/user-guide/command-line-interface#fix

http://eslint.org/docs/user-guide/command-line-interface#--fix




# ESlint CLI Options 


http://eslint.org/docs/user-guide/command-line-interface#options




http://eslint.org/docs/user-guide/command-line-interface#--env


http://eslint.org/docs/rules/no-invalid-regexp#environments


http://eslint.org/docs/user-guide/configuring#specifying-environments


> package.json

```json

{
    "eslintConfig": {
        "env": {
            "browser": true,
            "node": true,
            "es6": true
        },
        "plugins": ["example"],
    }
}


```

## --fix


```sh

# --fix 自动修复问题

$ npm run lint --fix



```




## webpack dev server & eslint

```sh

$ npm i -D eslint-loader

```


```js


overlay: {
    errors: true,
    warnings: true
},



devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8888,
    overlay: {
        errors: true,
        warnings: true
    }
},



```




https://www.bilibili.com/video/av11128844/index_11.html


https://facebook.github.io/react/docs/components-and-props.html#extracting-components


<APP name={this.props.author.name}/>

<A user={props.author}>

<B name={props.user}>







https://github.com/gildata/RAIO/issues/4






# Lifecycle Methods

https://facebook.github.io/react/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class


https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly

https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous


```jsx
// Wrong
this.setState({
    counter: this.state.counter + this.props.increment,
});


// Correct
this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
}));

```
































































