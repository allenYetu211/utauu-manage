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

const TagsComponents = (props: IProps) => {
	const onChangeSelected = (index: number) => {
		if (props.isHighlight) {
			props.onChangeSelected([index]);
		} else {
			const copySelected = props.selected.slice();
			const includes = copySelected.includes(index);

			if (includes) {
				const targetIndex = copySelected.findIndex((item: number) => {
					return item === index;
				});
				copySelected.splice(targetIndex, 1);
			} else {
				copySelected.push(index);
			}
			props.onChangeSelected(copySelected);
		}
	};

	return (
		<div className={style.itemContainer}>
			{props.tags.map((item: ITags, key: number) => {
				const isSelected = props.selected.includes(key);
				return (
					<TagItem
						key={key}
						index={key}
						tag={item}
						isSelected={isSelected}
						onChangeSelected={onChangeSelected}
					/>
				);
			})}
		</div>
	);
};

export default TagsComponents;
