/**
 * @module:  ui样式容器
 * @author:  Allen OYang https://github.com/allenYetu211
 */

import React from 'react';

import cn from 'classnames';

import style from './style/style.scss';

interface IProps {
	cardTitlt?: string;
	fullHv?: boolean;
	children?: any;
}

const CardContainerComponent = (props: IProps) => {
	return (
		<div
			className={cn(style.cardContainer, {
				[style.cardFullContainer]: props.fullHv,
			})}>
			<div className={style.cardTitle}>{props.cardTitlt}</div>
			<div className={style.cardChilderContainer}>{props.children}</div>
		</div>
	);
};

export default CardContainerComponent;

// class CardContainerComponent extends React.Component<
// 	IProps,
// 	any
// > {
// 	public render() {
// 		const { children, cardTitlt, fullHv } = this.props;

// 		return (
// 			<div
// 				className={cn(style.cardContainer, {
// 					[style.cardFullContainer]: fullHv,
// 				})}>
// 				<div className={style.cardTitle}>{cardTitlt}</div>
// 				<div className={style.cardChilderContainer}>{children}</div>
// 			</div>
// 		);
// 	}
// }
