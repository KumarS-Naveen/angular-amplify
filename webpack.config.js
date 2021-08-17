import CopyWebpackPlugin from 'copy-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import { resolve } from 'path';

export const mode = 'development';
export const entry = './src/app.js';
export const output = {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist')
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/
        }
    ]
};
export const devServer = {
    contentBase: './dist',
    overlay: true,
    hot: true
};
export const plugins = [
    new CopyWebpackPlugin({
        patterns: ['index.html']
    }),
    new HotModuleReplacementPlugin()
];