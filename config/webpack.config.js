const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: path.join(__dirname, '../src/index.jsx'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(le|c)ss$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        host: 'localhost',
        port: '3000',
        inline: true,
        open: true,
        compress: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {"^/api": ""}
            }
        }
    },

    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, '../index.html')
        })
    ]
}