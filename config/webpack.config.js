// config/webpack.config.js
var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, '../node_modules');
var dir_src = path.resolve(__dirname, '../src');
var dir_build = path.resolve(__dirname, '../build');

module.exports = {
    entry: path.resolve(dir_src, 'main.jsx'),
    output: {
        path: dir_build, // for standalone building
        filename: 'bundle.js'
    },
    // webpack-dev-server默认配置项，建议使用
    devServer: {
        contentBase: dir_build
    },
    module: {
        loaders: [
            {test: /src(\\|\/).+\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'react']}},
            {
                test: /\.json$/,
                loaders: ['json'],
                exclude: /node_modules/
            },{
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }, {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx', 'less']
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['import', '$', 'export']
            },
            output: {
                comments: false,  // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ],
    //stats: {
    //    colors: true // Nice colored output
    //}
    devtool: false,
};