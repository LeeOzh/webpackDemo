const base = require('./webpack.config');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(base, {
    mode: 'development',
    
    devServer: {
        port: 8008,
        hot: true,
        open: true,
        historyApiFallback: true
    },

    devtool: 'source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

})