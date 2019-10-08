// import darkTheme from '@ant-design/dark-theme';
const path = require('path');
const darkTheme = require('@ant-design/dark-theme');

exports.alias = {
	globals: path.resolve(__dirname, '../src'),
	'react-native': 'react-native-web',
};
exports.modifyVars = darkTheme.default;
