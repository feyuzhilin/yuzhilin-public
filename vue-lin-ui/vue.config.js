const path = require("path")
module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    //webpack拓展，将packages加入编译
    chainWebpack: config =>{
        config.module
            .rule('js')
            .include.add(path.resolve(__dirname,'packages')).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    }
}