const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [path.join(__dirname, 'src'), 'node_modules', 'public'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            presets:[ "@babel/preset-react", "@babel/preset-typescript"]
          }
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    //   {
    //     test: /\.(png|jpe?g|gif)$/i,
    //     use: [
    //       {
    //         loader: 'file-loader',
    //       },
    //     ],
    //   }

        // {
        //     test: /\.(svg)$/,
        //     loader: 'file-loader',
        //     options: {
        //         name: '[name].[ext]',
        //         publicPath: './public/',
        //         outputPath: 'static/images',
        //     }
        // }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
    new NodePolyfillPlugin(),
    new MiniCssExtractPlugin({
        linkType: "text/css",
      }),
      new CopyPlugin({
        patterns: [
          { from: "public/images", to: "static/images" },
          { from: "public/favicon.ico", to: "static/favicon.ico" }
        ],
      }),
  ],

  entry: {
    main: './src/index.tsx',
  },
};