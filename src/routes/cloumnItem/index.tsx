import React from 'react';
import { IColumn } from 'globals/interfaces/routes.interface';
import { Link } from 'react-router-dom';
import style from 'globals/routes/style/stlye.scss';
import cn from 'classnames';

interface IProps {
	index: number;
	targetCount: number;
	column: IColumn;
	onTargetLiClount: (index: number) => void;
}

const ColumnItemComponent = (props: IProps) => {
	return (
		<li
			className={cn({
				[style.active]: props.targetCount === props.index,
			})}
			onClick={() => {
				props.onTargetLiClount(props.index);
			}}>
			<Link to={props.column.to}>{props.column.txt}</Link>
		</li>
	);
};

export default ColumnItemComponent;
