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
            {test: /jquery\.js$/, loader: 'expose-loader?jQuery!expose-loader?$'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})},
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'})
            },
            {test: /img\//, loader: 'file-loader?name=../[folder]/[name].[ext]'},
            {test: /\.(gif|png|jpg|svg|cur)$/, loader: 'file-loader?name=[folder]/[name].[ext]'},
            {test: /\.(eot|woff|ttf|woff2)/, loader: 'file-loader?name=[folder]/[name].[ext]'}
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};