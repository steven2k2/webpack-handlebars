const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: process.env.NODE_ENV || 'development', // Dynamic environment mode
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js', // Cache-busting JS
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
    devtool: 'source-map', // Adds source maps for better debugging
    devServer: {
        static: './dist',
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                options: {
                    knownHelpersOnly: false,
                    inlineRequires: '\/assets/images\/'
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css', // Organized CSS output
        }),
    ],
};