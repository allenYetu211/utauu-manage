import React from 'react';
import { ITags } from 'globals/interfaces/interface';
import cn from 'classnames';
import style from '../style/style.scss';

interface IProps {
	tag: ITags;
	index: number;
	isSelected: boolean;
	onChangeSelected: (index: number) => void;
}
export default class TagsComponents extends React.Component<IProps, any> {
	public onChangeSelected = () => {
		const { onChangeSelected, index } = this.props;
		onChangeSelected(index);
	};

	public render() {
		const { tag, isSelected } = this.props;
		return (
			<div
				onClick={this.onChangeSelected}
				className={cn(style.tagItem, {
					[style.active]: isSelected,
				})}>
				{tag.msg}
			</div>
		);
	}
}
