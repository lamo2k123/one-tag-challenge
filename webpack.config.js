var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index',
    output: {
        path    : __dirname + '/gh-pages',
        filename: 'style.js'
    },
    module : {
        loaders : [{
            test    : /\.jsx?$/,
            exclude : /(node_modules)/,
            loader  : 'babel',
            query   : {
                presets: [
                    'react',
                    'es2015'
                ]
            }
        }, {
            test:   /\.json$/,
            loader: 'json'
        }, {
            test:   /\.pcss$/,
            loader: ExtractTextPlugin.extract('css-loader?modules!postcss-loader')
        }]
    },
    resolve : {
        extensions : [
            '',
            '.js',
            '.json'
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            title: 'OTG'
        })
    ],
    postcss: function () {
        return [require('postcss-nested')];
    }
};