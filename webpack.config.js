const path = require('path')
const packageJSON = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Utility function to clean version strings
const getVersion = (pkg) => pkg ? pkg.replace(/^\^/, '') : 'Unknown'
const copyrightYear = new Date().getFullYear()

const lastUpdated = new Intl.DateTimeFormat('en-AU', {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
}).format(new Date());

const siteName = packageJSON.name
const description = 'This is a demo project that combines <strong>Webpack</strong>, <strong>Handlebars</strong>, and <strong>Bootstrap</strong> to create a modular, modern web application setup.'

// Extract versions for project dependencies
const versions = {
  webpack: getVersion(packageJSON.devDependencies.webpack),
  bootstrap: getVersion(packageJSON.devDependencies.bootstrap)
}

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
    open: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          knownHelpersOnly: false,
          inlineRequires: '/assets/images/',
          partialDirs: path.resolve(__dirname, 'src/templates/partials')
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/pages/home.hbs',
      filename: 'index.html',
      templateParameters: {
        siteName,
        description,
        versions,
        copyrightYear,
        lastUpdated
      }

    }),
    new HtmlWebpackPlugin({
      template: './src/templates/pages/about.hbs',
      filename: 'about.html',
      // inject: false,
      templateParameters: {
        siteName,
        description,
        versions,
        copyrightYear,
        lastUpdated
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css'
    })
  ]
}
