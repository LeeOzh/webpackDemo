const base = require('./webpack.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require("terser-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

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
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
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
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    devtool: false,

    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ]
})