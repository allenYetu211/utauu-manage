import React from 'react';
import ReactDOM from 'react-dom';
import IndexView from 'global/page/index';
import * as serviceWorker from './serviceWorker';

// 兼容IE9-11版本
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import 'global/asset/styles/global.scss';

ReactDOM.render(<IndexView />, document.getElementById('root'));

serviceWorker.unregister();
