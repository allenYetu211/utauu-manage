import React from 'react';
import logo from 'global/asset/images/xylink-logo.png';
import TitleComponents from 'global/components/title/index';

import style from './style/index.scss';

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
