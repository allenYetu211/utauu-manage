import React from 'react';
import i18n from 'i18next';

import { getQueryStr } from 'globals/utils/index.ts';

import style from './style/index.scss';
import cn from 'classnames';
interface IProps {}

class CreateLive extends React.Component<IProps, any> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			platform: getQueryStr().platform,
		};
	}
	render() {
		const { platform } = this.state;
		console.log(platform);
		return (
			<div
				className={cn(
					style['container'],
					platform === 'ME40' ? style['container-me'] : '',
				)}>
				<p className={style['live']}>{i18n.t('common_live')}</p>
				<a className={style['back-icon']} />
				<div className={style['content']}>
					<div className={style['img-wrap']}>
						{/* 二维码图片是暂时的，要根据后台接口获取 */}
						<img
							className={style['full-img']}
							src="http://testdev.xylink.com/live/liveVideo/nemo/newqr/254385"
						/>
					</div>
					<p className={style['prompt-title']}>{i18n.t('createLive_title')}</p>
					<p
						className={
							platform === 'nemo'
								? style['prompt-desc']
								: style['prompt-desc-no-opacity']
						}>
						{i18n.t('createLive_desc')}
					</p>
				</div>
			</div>
		);
	}
}

export default CreateLive;
