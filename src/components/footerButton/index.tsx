/**
 * @module:  底部确认模块
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React from 'react';
import { Button } from 'antd';
import style from './style/style.scss';

interface IProps {
	ok: () => void;
	cancel?: () => void;
	okText?: string;
}

const FooterButtonComponent = (props: IProps) => {
	return (
		<div className={style.footerComponent}>
			<div className={style.footerButtonComponent}>
				<Button type="primary" onClick={props.ok}>
					{props.okText ? props.okText : '确认'}
				</Button>
				{props.cancel && (
					<Button type="primary" onClick={props.cancel}>
						取消
					</Button>
				)}
			</div>
		</div>
	);
};

export default FooterButtonComponent;
