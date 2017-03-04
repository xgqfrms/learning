const path = require('path');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: './new-app.js',
    },
    // entry: './src/new-app.js',
    output: {
        filename: 'bundle.js',
        // bundle.js
        // filename: '[name].bundle.js',
        // main.bundle.js
        path: path.resolve(__dirname, 'dist')
    }
};
