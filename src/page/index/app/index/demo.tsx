import React from 'react';
import logo from 'globals/asset/images/xylink-logo.png';
import TitleComponents from 'globals/components/title/index';

import style from './style/index.scss';

const IndexView = () => {
	return (
		<div className={style.container}>
			<div className={style.containerLogo}>
				<img src={logo} alt="xylink" />
			</div>
			<TitleComponents title="TitleComponents" text="center" />
			<p className={style.containerView}>index view</p>
		</div>
	);
};
export default IndexView;
