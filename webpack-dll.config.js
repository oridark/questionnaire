/*
 * @Author: your name
 * @Date: 2020-07-15 19:09:46
 * @LastEditTime: 2020-07-20 19:02:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \accounting2.0\webpack-dll.config.js
 */
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const vendors = [
    'vue',
    'vuex',
    'vue-class-component',
    'vue-property-decorator',
    'vue-router'
];

module.exports = {
    resolve: {
        extensions: ['.ts', '.html', 'js', 'css', 'less']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]',
        publicPath: '/'
    },
    entry: {
        lib: vendors
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname
        }),
        new BundleAnalyzerPlugin()
    ]
};
