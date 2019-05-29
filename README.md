# webpackDemo
based on webpack / babel / react to build the basic framework
什么是webpack？
webpack可以看做模块打包器，分析你的项目结构，找到js模块以及其他一些浏览器不能直接运行的拓展语言（less,typescript）等，
并将其转换和打包为合适的格式供浏览器使用。

loader:有能力调用外部的脚本和工具，实现对不同格式的文件的处理
babel：编译js的平台
plugin: 是用来拓展webpack功能的，他们会在整个构建过程中生效，执行相关的任务。
plugin和loader的区别：
    loader是在打包构建过程中处理源文件的(Jsx, sass ,less ...)，一次处理一个
    plugin是在整个构建过程中起作用，插件并不直接处理单个文件
 
初始化项目
mkdir webpackDemo
cd webpackDemo
npm init -y 

安装依赖
npm install --save-dev webpack            
npm install --save-dev webpack-dev-server //构建本地服务器
npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react    //babel loader
npm install --save-dev react react-dom      //react
npm install --save-dev style-loader css-loader postcss-loader autoprefixer    //css loader
npm install --save-dev html-webpack-plugin babel-plugin-react-transform react-transform-hmr extract-text-webpack-plugin
npm instsall clean-webpack-plugin  //去除bulid文件中多于的文件
    
