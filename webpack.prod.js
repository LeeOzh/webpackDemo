const base = require('./webpack.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require("terser-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(base, {
    mode: 'production',

    optimization: {
        splitChunks: {
            cacheGroups: {
				packageScript: {  // node——modules 依赖打包
					name: 'package',
					test: /[\\/]node_modules[\\/]/,  
					chunks: 'all'
				},      
				commonScript: {  //  共用依赖
					name: 'common',
					chunks: 'initial',
					minChunks: 2
				}        
			},
        },
        minimizer: [
            new TerserJSPlugin(),
            new UglifyJsPlugin({
                uglifyOptions: {
                    comments: false
                }
            }),
        ]
    },

    devtool: false,

    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ]
})