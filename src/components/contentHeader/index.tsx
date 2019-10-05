/**
 * @module:  标签容器
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React from 'react';
import style from './style/style.scss';

interface IProps {
	title: string;
	hideGoBack?: boolean;
}

export default class ContentHeaderComponent extends React.Component<
	IProps,
	any
> {
	public onHistoryGoBack = () => {
		window.history.back();
	};

	public render() {
		const { title, children, hideGoBack } = this.props;

		return (
			<div className={style.contentHeader}>
				<div className={style.headerTitleContainer}>
					{!hideGoBack && (
						<div onClick={this.onHistoryGoBack} className={style.historyGoBack}>
							返回
						</div>
					)}
					<h1>{title}</h1>
				</div>

				<div>{children}</div>
			</div>
		);
	}
}
