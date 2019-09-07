const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 创建一个插件实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),  // 源文件路径
    filename: 'index.html'                               // 生成内存中首页的名称
})

// 向外暴露一个配置对象
// 因为 webpack 是基于Node构建的；所以 webpack 支持所有Node API 和语法
// webpack默认只能处理.js后缀名的文件，需要配置规则
module.exports = {
    mode: 'development', // development   production
    plugins: [
        htmlPlugin
    ],
    // 所有第三方模块的配置规则
    module: {
        rules: [
            {test: /\.js|jsx$/, use: ['babel-loader'], exclude: /node_modules/},
            {test: /\.ttf|woff|woff2|eot|svg|jpg|png|gif$/, use: ['url-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.scss$/, use: [
                'style-loader', 
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[path][name]-[local]-[hash:base64:5]',
                        },
                    },
                },
                'sass-loader'],
            exclude: /node_modules/},
            {test: /\.less$/, use: [ 
                'style-loader', 
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[path][name]-[local]-[hash:base64:5]',
                        },
                    },
                },
                'less-loader'],
            exclude: /node_modules/}
        ]
    },
    // 配置省略后缀名和路径别名
    resolve: {
        // 默认.js, .json
        extensions: [".js", ".jsx", ".json"],
        alias: {
            '@': path.join(__dirname, "./src")
        }
    }
}



// 以下的写法不行，这是ES6中向外导出模块的API，与之对应的是import ** from '标识符'
// export default {}