const path = require('path');

module.exports = {
    entry: './src/new-app.js',
    output: {
        filename: 'bundle.js',
        // bundle.js
        // filename: '[name].bundle.js',
        // main.bundle.js
        path: path.resolve(__dirname, 'dist')
    }
};
