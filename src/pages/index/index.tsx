import React from 'react';
// import {getTagsAll} from 'globals/action/httpaction';
import { observer, inject } from 'mobx-react';
@inject('store')
@observer
export default class IndexPage extends React.Component<any, any> {
	public render() {
		const { tags } = this.props.store;
		console.log('tags:::', tags);
		return <div>IndexPage</div>;
	}
}
