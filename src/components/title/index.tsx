import React from 'react';

export interface IPrpos {
	title: string;
	text: string;
}

const TitleComponents = (props: IPrpos) => {
	return (
		<div>
			TitleComponents
			<p>{props.title}</p>
			<p>{props.text}</p>
		</div>
	);
};

export default TitleComponents;
