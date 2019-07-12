const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist')
}

let config = {
    entry: `${PATHS.src}/index.js`,
    output: {
        path: PATHS.dist,
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.?css$/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
            }
        ]
    },
    devServer: {
        contentBase: PATHS.dist,
        port: 8081,
        overlay: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: `${PATHS.src}/index.html`
        })
    ]
};

module.exports = (env, options) => {
    return config;
}