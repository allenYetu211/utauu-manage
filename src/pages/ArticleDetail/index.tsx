import React from 'react';
import ContentHeaderComponent from 'globals/components/contentHeader';
import CardContainerComponent from 'globals/components/cardContainer';

import { getArticleDetail } from 'globals/action/httpaction';
export default class ArticleDetailPage extends React.Component<any, any> {
	public async componentDidMount() {
		const { id } = this.props.match.params;
		const result = await getArticleDetail(id);
		console.log('result:::', result);
	}

	// 编辑文章
	public onEditArticle = () => {
		console.log('onEditArticle');
	};

	public render() {
		return (
			<div>
				<ContentHeaderComponent title="新建文章">
					<button onClick={this.onEditArticle}>编辑</button>
				</ContentHeaderComponent>

				<CardContainerComponent cardTitlt="文章内容">
					CardContainerComponent
				</CardContainerComponent>
			</div>
		);
	}
}
