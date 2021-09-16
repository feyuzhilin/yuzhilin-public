const { resolve } = require("path");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "sourcemap",
    devServer: {
        contentBase: './',
        open: true
    }
}