module.exports = {
	extends: [
		'eslint-config-airbnb',
		'eslint:recommended',
		// 'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	env: {
		browser: true,
		es6: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	parser: 'babel-eslint',
	plugins: ['react', 'react-hooks', 'promise', 'prettier'],
	rules: {
		'import/no-unresolved': 'off',
		'react/jsx-filename-extension': 'off',
		// 'comma-dangle': 'off',
		'arrow-body-style': 'off',
		'no-unused-vars': 'off',
		'jsx-quotes': ['error', 'prefer-double'],
		'react/jsx-closing-bracket-location': [1, 'props-aligned'],
		'react/destructuring-assignment': 'off',
		'react/jsx-indent': 'off',
		'prettier/prettier': 'error',
	},
};
