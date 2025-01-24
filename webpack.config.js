const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // Cleans old files on build
    },
    devServer: {
        static: './dist',
        open: true, // Automatically opens browser
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // Processes Sass files
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Injects JS into the HTML
        }),
    ],
};