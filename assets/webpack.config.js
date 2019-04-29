var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: "./src/",
    output: {
        path: __dirname + "/../www/assets/",
        filename: "index.js"
    },
    module: {
        rules: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})},
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'})
            },
            {test: /img\//, loader: 'file-loader?name=../[folder]/[name].[ext]'},
            {test: /\.(gif|png|jpg|svg|cur)$/, loader: 'file-loader?name=[folder]/[name].[ext]'},
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {test: /\.(eot|woff|ttf|woff2)/, loader: 'file-loader?name=[folder]/[name].[ext]'}
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            typeahead: 'typeahead.js',
            bloodhound: 'typeahead.js/dist/bloodhound.js',
        }
    },
    plugins: [
        new ExtractTextPlugin("index.css")
    ]
};