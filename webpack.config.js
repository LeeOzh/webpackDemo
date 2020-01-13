const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    isProd: false
}

module.exports = {
    entry: './src/index.js',

    output: {
        filename: '[name].bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules'
                ]
            },
            {
                test: /\.js$/,
                include: path.join(__dirname,'src'),
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    { loader: 'file-loader'}
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(__dirname,'dist/index.html'),
            template: './src/index.html'
        })
    ]
}



// --profile --json > stats.json 