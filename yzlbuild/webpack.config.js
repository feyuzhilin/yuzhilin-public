const HtmlWebpackPlugin = require("html-webpack-plugin"),
    { resolve } = require("path");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "sourcemap",
    module: {
        rules: [
            {
                test: /\.tpl$/,
                use: [
                    'babel-loader',
                    {
                        // loader: resolve(__dirname, 'src/loaders/tpl-loader')
                        loader: './src/loaders/tpl-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "src/index.html")
        })
    ],
    devServer: {
        contentBase: './',
        open: true
    }
}