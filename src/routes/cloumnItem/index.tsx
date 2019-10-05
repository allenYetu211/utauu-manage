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
	// onTargetLiClount = () => {
	// 	const { onTargetLiClount, index } = props;
	// 	onTargetLiClount(index);
	// };

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

// class ColumnItemComponent extends React.Component<IProps, any> {
// 	constructor(props: IProps) {
// 		super(props);
// 		this.state = {
// 			toggleState: false,
// 		};
// 	}

// 	public onTargetLiClount = () => {
// 		const { onTargetLiClount, index } = this.props;
// 		onTargetLiClount(index);
// 	};
// 	public render() {
// 		const { column, targetCount, index } = this.props;
// 		return (
// 			<li
// 				className={cn(targetCount === index ? style.active : '')}
// 				onClick={this.onTargetLiClount}>
// 				<Link to={column.to}>{column.txt}</Link>
// 			</li>
// 		);
// 	}
// }
