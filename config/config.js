const path = require('path');

exports.alias = {
	global: path.resolve(__dirname, '../src'),
	'react-native': 'react-native-web',
};
