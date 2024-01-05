const path = require('path');
const Webpack = require('webpack');
module.exports ={
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    mode: 'production',
    devServer:{
        port: 3200,
        static: './src'
    },
    module: {
        rules: [{
            test: /\.js$/, 
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
}