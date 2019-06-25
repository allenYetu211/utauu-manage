import React from 'react';
import logo from 'global/asset/images/xylink-logo.png';
import style from './style/index.scss';
import { Button } from 'antd';

const IndexView = () => {
	return (
		<div className={style.container}>
			<div className={style.containerLogo}>
				<img src={logo} alt="xylink" />
			</div>

			<p className={style.containerView}>xylink View</p>
			<div>
				<Button type="primary">Primary</Button>
				<Button>Default</Button>
			</div>
		</div>
	);
};

export default IndexView;
