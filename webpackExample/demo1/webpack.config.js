const path = require("path");
var webpack = require("webpack");
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: {
        bundle: "./src/index.js",
        vendor: "./src/main.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    module: {
       rules: [
          {
            test: /\.css$/,
            use: [
            'style-loader',
             'css-loader'
            ]
          }
       ]
    },
    plugins: [
        new ManifestPlugin({
            fileName: 'manifest.json',
            basePath: '/'
        }),
        new ChunkManifestPlugin({
            filename: "chunk-manifest.json",
            manifestVariable: "webpackManifest"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "manifest"], // vendor libs + extracted manifest
            minChunks: Infinity,
        }),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            title: 'index',
            filename: 'index.html',
            template: 'index.html',
            indect: true,
            chunks: ['bundle', 'vendor']
        })
    ],
};