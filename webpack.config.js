/**
 * Created by qiguoqiang on 2019/5/27.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool : 'eval-source-map',
    entry : __dirname + '/app/main.js',  //多次提及的唯一入口文件
    output : {
        path : __dirname + '/build',  //打包后文件存放的地方
        filename : 'bundle.js'        //打包后文件名
    },
    devServer : {
        contentBase : false,    //本地服务器所加载页面所在目录
        historyApiFallback : true,   //不跳转
        inline : true,               //实时刷新
        port : 3000                  //端口
    },
    module : {
        rules : [
            {
                test : /\.(jsx|js)$/,
                use : {
                    loader : 'babel-loader'
                },
                exclude : /node_modules/
            }, {
                test : /\.css$/,
                use : [
                    {
                        loader : 'style-loader'
                    }, {
                        loader : 'css-loader',
                        options : {
                            modules : true, // 指定启用css modules
                            localIdentName : '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }, {
                        loader : 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({template:__dirname+'/app/index.tmpl.html'}),
        new webpack.HotModuleReplacementPlugin()
    ]
}
