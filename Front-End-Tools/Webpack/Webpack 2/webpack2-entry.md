# webpack2 entry  



https://webpack.js.org/configuration/entry-context/#entry





context: path.resolve(__dirname, "app")



By default the current directory is used, but it's recommended to pass a value in your configuration. This makes your configuration independent from CWD (current working directory).


entry: {
  home: "./home.js",
  about: "./about.js",
  contact: "./contact.js"
}



## entry

string | [string] | object { <key>: string | [string] }

    context: path.resolve(__dirname, "src"),
    entry: {
        app: './new-app.js',
    },
    // entry: './src/new-app.js',



















