/**
 * Created by tiran on 8/3/17.
 */

const path = require('path');
let webpack = require('webpack');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let css = require('!css-loader!resolve-url-loader!sass-loader?sourceMap!./src/file.scss');//resolving scss loading issue
//let css =require('!style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap!./src/index.scss');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: [path.join(__dirname, 'src'), path.join(__dirname, 'common')],
                query: {
                    plugins: ['recharts'],
                    presets: ['es2015', 'babel.dev'],
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader?presets[]=react','presets[]=es2015'],
            },
            {
                test   : /\.css$/,
                loaders: ['style-loader', 'css-loader', 'resolve-url-loader']
            },
            {
                test   : /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url-loader?limit=25000"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },
            {
                test: /favicon\.ico$/,
                loader: 'url-loader',
                query: {
                    limit: 1,
                    name: '[name].[ext]'
                }
            },
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.scss$/,
                    /\.css$/,
                    /\.json$/,
                    /\.png$/,
                    /\.jpeg?g$/,
                ]
            }
        ],
        loader: require.resolve('file-loader'),
        plugins: [
            HtmlWebpackPluginConfig,
            //new ExtractTextPlugin('index.scss')
           // new ExtractTextPlugin('./src/index.scss')
        ]
    }
};