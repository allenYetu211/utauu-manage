import React from 'react';
import ReactDOM from 'react-dom';
import IndexView from 'index/app/index/demo';

// 兼容IE9-11版本
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import 'globals/asset/styles/global.scss';

ReactDOM.render(<IndexView />, document.getElementById('root'));
