import React from 'react';
import logo from 'global/asset/images/xylink-logo.png';
import TitleComponents from 'global/components/title/index';

import Action from 'global/utils/utils';

import style from './style/index.scss';

console.log('Action', Action);

const IndexView = () => {
	return (
		<div className={style.container}>
			<div className={style.containerLogo}>
				<img src={logo} alt="xylink" />
			</div>
			<TitleComponents title="TitleComponents" text="center" />
			<p className={style.containerView}>xylink View</p>
		</div>
	);
};
export default IndexView;
