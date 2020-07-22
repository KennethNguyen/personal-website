const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: '/',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader:'html-loader',
            },
        ],
    },
};