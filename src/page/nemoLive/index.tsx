import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './store';
import { HashRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'nemoLive/i18n/index';
import RouterMap from './router';

// 兼容IE9-11版本
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import 'globals/asset/styles/global.scss';

ReactDOM.render(
	<Router>
		<Provider>
			<I18nextProvider i18n={i18n}>
				<RouterMap />
			</I18nextProvider>
		</Provider>
	</Router>,
	document.getElementById('root') as HTMLElement,
);
