var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: "./src/entry.js",
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    output: {
        path: __dirname,
        filename: "index.js"
    },
    module: {
        loaders: [
            { test: /\.css$/ ,loader: 'style!css' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.jsx$/, loader: 'babel-loader!jsx-loader?harmony'},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets:['react','es2015']
                }
            },
            {test: /\.less$/,loader: "style!css!less"},
            {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/, loader: 'url-loader?limit=10000',},
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    resolve: {
        root: [
            path.resolve("node_modules")
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            React:"react",
            ReactDOM:"react-dom",
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};