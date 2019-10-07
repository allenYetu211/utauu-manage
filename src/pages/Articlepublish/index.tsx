/**
 * @file: 发布文章
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React from 'react';
import { getPublishClassArticle } from 'globals/action/httpaction';
import ContentHeaderComponent from 'globals/components/contentHeader/index';
import CardContainerComponent from 'globals/components/cardContainer/index';
import ArticleContainer from 'globals/components/articles';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class ArticlePublishPages extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			article: [],
		};
	}

	public async componentDidMount() {
		const article = await getPublishClassArticle();
		this.setState({ article });
	}

	public render() {
		const { article } = this.state;
		return (
			<div>
				<ContentHeaderComponent hideGoBack title="已发布文章" />
				<div>
					<CardContainerComponent>
						<div>
							<ArticleContainer article={article} />
						</div>
					</CardContainerComponent>
				</div>
			</div>
		);
	}
}
