/* eslint-disable react/no-access-state-in-setstate */
/**
 * @file: 目录展开关闭组件
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { IColumn, IChilds } from 'globals/interfaces/routes.interface';
import cn from 'classnames';
import style from 'globals/routes/style/stlye.scss';

interface IProps {
	index: number;
	targetCount: number;
	childs: IChilds;
	onTargetLiClount: (index: number) => void;
}

interface IState {
	toggleState: boolean;
}

export default class ColumnChildsComponent extends React.Component<
	IProps,
	IState
> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			toggleState: false,
		};
	}

	public componentWillReceiveProps(prveProps: IProps) {
		const { targetCount, index } = prveProps;
		if (targetCount !== index) {
			this.setState({ toggleState: false });
		}
	}

	public triggerColumn = () => {
		this.setState({
			toggleState: !this.state.toggleState,
		});
	};

	public onTargetLiClount = () => {
		const { onTargetLiClount, index } = this.props;
		onTargetLiClount(index);
	};

	public render() {
		const { childs, index, targetCount } = this.props;
		const { toggleState } = this.state;
		return (
			<li
				className={cn(targetCount === index ? style.active : '')}
				onClick={this.onTargetLiClount}>
				<div onClick={this.triggerColumn}>{childs.txt}</div>
				<ul
					className={cn(
						style.sideChildContainer,
						toggleState && targetCount === index ? style.sideChildShow : '',
					)}>
					{childs.column.map((childItem: IColumn, key: number) => {
						return (
							<li key={key}>
								<Link to={childItem.to}>{childItem.txt}</Link>
							</li>
						);
					})}
				</ul>
			</li>
		);
	}
}
