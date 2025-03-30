const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        // другие настройки devServer
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});