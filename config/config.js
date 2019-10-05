const path = require('path');

exports.alias = {
	globals: path.resolve(__dirname, '../src'),
	'react-native': 'react-native-web',
};
