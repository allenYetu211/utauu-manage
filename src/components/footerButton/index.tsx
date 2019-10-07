/**
 * @module:  底部确认模块
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React from 'react';
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
				<button type="button" onClick={props.ok}>
					{props.okText ? props.okText : '确认'}
				</button>
				{props.cancel && (
					<button type="button" onClick={props.cancel}>
						取消
					</button>
				)}
			</div>
		</div>
	);
};

export default FooterButtonComponent;
