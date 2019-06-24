import React from 'react';
import ReactDOM from 'react-dom';
import IndexView from 'global/page/index';
import * as serviceWorker from './serviceWorker';

import 'global/asset/styles/global.scss';

ReactDOM.render(<IndexView />, document.getElementById('root'));

serviceWorker.unregister();
