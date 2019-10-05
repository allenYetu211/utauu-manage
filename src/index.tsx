/**
 * @file:   入口文件
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import store from 'globals/store';
import './asset/style/global.scss';
import * as serviceWorker from './serviceWorker';
import BrowserRouters from './routes/index';

const appStore = {
	store,
};

ReactDOM.render(
	<Provider {...appStore}>
		<BrowserRouters />
	</Provider>,
	document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();
