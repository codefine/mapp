const WebpackMerge = require('webpack-merge');
const common = require('./webpack.common');
const Webpack = require('webpack');

module.exports = WebpackMerge(common, {
	mode: 'development',
	devtool: 'inline-source-map', // source-map 用于debug
	devServer: { // 本地测试服务器
		open: true,
		https: false,
		contentBase: './dist',
		hot: true, // 热模块替换
		host: '0.0.0.0', // 局域网访问支持
		port: 9527,
		useLocalIp: true, // 以本地ip打开
		compress: true, // gzip压缩
		headers: {},
		before(app) {}, /* eslint-disable-line no-unused-vars, no-empty-function */  // 启动前hook
		after(app) {}, /* eslint-disable-line no-unused-vars, no-empty-function */ // 启动后hook
	},
	plugins: [
		new Webpack.HotModuleReplacementPlugin() // 热模块替换需要的插件
	]
});