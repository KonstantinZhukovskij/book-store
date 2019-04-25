const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

DIST_FOLDER_NAME = 'dist';

module.exports = {
    entry: 'src/index.js',
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            root: __dirname,
            src: path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, DIST_FOLDER_NAME),
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/favicon.png'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, DIST_FOLDER_NAME),
        publicPath: '/'
    }
};
