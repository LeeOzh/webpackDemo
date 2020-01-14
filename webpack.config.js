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

    resolve: { // 资源引入配置
        alias: { // 路径别名
            // 'react': 'anujs',
            // 'react-dom': 'anujs',
            // 若要兼容 IE 请使用以下配置
            'react': 'anujs/dist/ReactIE',
            'react-dom': 'anujs/dist/ReactIE',
            
            '@reach/router': 'anujs/dist/Router.js'
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'scss', '*'], // 引入资源时，依次尝试的文件后缀 （使引入资源时，路径可不带文件后缀）
        mainFiles: ['index'], // 主文件名，默认情况下找哪个文件
        modules: ['node_modules']
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(__dirname,'dist/index.html'),
            template: './src/index.html'
        })
    ]
}



// --profile --json > stats.json 