import React from 'react';
import { ITags } from 'globals/interfaces/interface';
import cn from 'classnames';
import { Tag } from 'antd';
import style from '../style/style.scss';

const { CheckableTag } = Tag;

interface IProps {
	tag: ITags;
	index: number;
	isSelected: boolean;
	onChangeSelected: (index: number) => void;
}

const TagsComponents = (props: IProps) => {
	return (
		<CheckableTag
			className={style.tagItem}
			onChange={() => {
				props.onChangeSelected(props.index);
			}}
			checked={props.isSelected}>
			{props.tag.msg}
		</CheckableTag>
	);
};

export default TagsComponents;
