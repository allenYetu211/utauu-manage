const path = require('path');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.alias = {
	globals: path.resolve(__dirname, '../src'),
	index: path.resolve(__dirname, '../src/page/index'),
	nemoLive: path.resolve(__dirname, '../src/page/nemoLive'),
	'react-native': 'react-native-web',
};

exports.entry = {
	index: [
		require.resolve('react-dev-utils/webpackHotDevClient'),
		paths.appIndexJs,
	],
	nemoLive: [
		require.resolve('react-dev-utils/webpackHotDevClient'),
		paths.appNemoLiveJs,
	],
};

exports.entryProduction = {
	index: [paths.appIndexJs],
	nemoLive: [paths.appNemoLiveJs],
};

exports.htmlPlugin = [
	new HtmlWebpackPlugin({
		inject: true,
		chunks: ['index'],
		template: paths.appHtml,
		filename: 'index.html',
		title: 'index',
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeEmptyAttributes: true,
			removeStyleLinkTypeAttributes: true,
			keepClosingSlash: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true,
		},
	}),
	new HtmlWebpackPlugin({
		inject: true,
		chunks: ['nemoLive'],
		template: paths.appHtml,
		filename: 'nemoLive.html',
		title: 'nemoLive',
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeEmptyAttributes: true,
			removeStyleLinkTypeAttributes: true,
			keepClosingSlash: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true,
		},
	}),
];
