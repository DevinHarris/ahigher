const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, 'public/js'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.(scss|sass)?$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader", 
                    {
                        loader: "image-webpack-loader",
                        options: {
                            disable: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        // host: '192.168.1.68',
        port: 8080,
        https: true,
        hot: true,
        historyApiFallback: true,
        inline: true
    }
}