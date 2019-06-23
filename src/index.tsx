import React from 'react';
import ReactDOM from 'react-dom';
import IndexView from '@/page/index';
import * as serviceWorker from './serviceWorker';

import '@/asset/styles/global.scss';

ReactDOM.render(

  <IndexView/>, document.getElementById('root'))

serviceWorker.unregister();
