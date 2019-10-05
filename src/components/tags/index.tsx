/**
 * @file:
 * @module:  tags 列表组件
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React from 'react';
import { ITags } from 'globals/interfaces/interface';
import style from './style/style.scss';
import TagItem from './tagItem';

interface IProps {
	tags: ITags[];
	selected: number[];
	isHighlight?: boolean; // 是否选择单个
	onChangeSelected: (value: number[]) => void;
}
export default class TagsComponents extends React.Component<IProps, any> {
	// 检测是否存在 event:React.MouseEvent<HTMLElement>
	public onChangeSelected = (index: number) => {
		const { selected, onChangeSelected, isHighlight } = this.props;
		if (isHighlight) {
			onChangeSelected([index]);
		} else {
			const copySelected = selected.slice();
			const includes = copySelected.includes(index);

			if (includes) {
				const targetIndex = copySelected.findIndex((item: number) => {
					return item === index;
				});
				copySelected.splice(targetIndex, 1);
			} else {
				copySelected.push(index);
			}
			onChangeSelected(copySelected);
		}
	};

	public render() {
		const { tags, selected } = this.props;
		return (
			<div className={style.itemContainer}>
				{tags.map((item: ITags, key: number) => {
					const isSelected = selected.includes(key);
					return (
						<TagItem
							key={key}
							index={key}
							tag={item}
							isSelected={isSelected}
							onChangeSelected={this.onChangeSelected}
						/>
					);
				})}
			</div>
		);
	}
}
