const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
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
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist/'),
        host: 'localhost',
        port: '3000',
        inline: true,
        open: true,
    },
}