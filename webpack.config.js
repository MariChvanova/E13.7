const path = require('path');
const webpack = require('webpack');

module.exports = {
    // ... остальные настройки webpack
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // служить файлы из папки dist
        },
        compress: true, // сжатие
        port: 9000, // порт
        open: true, // открывать браузер автоматически
        hot: true, // включаем HMR (добавим отдельно ниже)
    },



    plugins: [
        // ... другие плагины
        new webpack.HotModuleReplacementPlugin(),
    ],
};