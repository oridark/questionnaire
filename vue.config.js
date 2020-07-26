/*
 * @Author: your name
 * @Date: 2020-07-15 16:33:35
 * @LastEditTime: 2020-07-21 09:31:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \accounting2.0\vue.config.js
 */
const path = require('path');
// const { name } = require('./package');
// const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const port = 8080; // dev port
const resolve = dir => path.join(__dirname, dir);
// const babelPluginImport = require('babel-plugin-import')
module.exports = {
    devServer: {
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        port,
        proxy: { // 配置代理
            '/api': {
                target: 'http://0.0.0.0:8080'
            }
        },
        overlay: {
            warnings: false,
            errors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            return {
                plugins: [
                    // new webpack.DllReferencePlugin({
                    //   context: __dirname,
                    //   manifest: require('./manifest.json')
                    // }),
                    new BundleAnalyzerPlugin()
                ]
            };
        } else {
            // 为开发环境修改配置...
            return {
                plugins: [
                    // new webpack.DllReferencePlugin({
                    //   context: __dirname,
                    //   manifest: require('./manifest.json')
                    // }),
                    new BundleAnalyzerPlugin()
                ],
                resolve: {
                    symlinks: true
                }// 添加热更新配置
                // output: {
                //     publicPath: '/'
                // },
            };
        }
    },
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'));
        // config.plugin('babel-plugin-import')
        //     .use(babelPluginImport, [{ libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' }])
    }
};
