var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: './appapi3.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_models/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}
