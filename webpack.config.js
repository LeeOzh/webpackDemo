const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Mode = process.env.NODE_ENV.trim() !== 'production';
const publicPath = Mode ? './' : '/';
module.exports = {
    entry: './src/index.js',

    output: {
        filename: '[name].bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname,'src'),
                use: 'babel-loader'
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    Mode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader?modules',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        publicPath: Mode ? '' : 'http://106.15.206.33:8080/dist/images/'
                    }
                }
            }
        ]
    },

    resolve: { // 资源引入配置
        extensions: ['.tsx', '.ts', '.js', '.jsx', 'scss', '*'], // 引入资源时，依次尝试的文件后缀 （使引入资源时，路径可不带文件后缀）
        mainFiles: ['index'], // 主文件名，默认情况下找哪个文件
        modules: ['node_modules']
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(__dirname,'dist/index.html'),
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
    ]
}



// --profile --json > stats.json 