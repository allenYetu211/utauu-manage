/**
 * @file: 所有文章
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React from 'react';
import ContentHeaderComponent from 'globals/components/contentHeader/index';
import CardContainerComponent from 'globals/components/cardContainer/index';
import ArticleContainer from 'globals/components/articles';
import { getArticleAll } from 'globals/action/httpaction';
import { Link } from 'react-router-dom';
import { IArticle } from 'globals/interfaces/interface';

interface IState {
	article: IArticle[];
}
export default class ArticleAllPages extends React.Component<any, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			article: [],
		};
	}

	public async componentDidMount() {
		const result = await getArticleAll();
		this.setState({ article: result });
	}

	public render() {
		const { article } = this.state;
		return (
			<div>
				<ContentHeaderComponent hideGoBack title="所有文章">
					<button type="button">
						<Link to="/article-create">新建文章</Link>
					</button>
				</ContentHeaderComponent>

				<div>
					<CardContainerComponent>
						<ArticleContainer article={article} />
					</CardContainerComponent>
				</div>
			</div>
		);
	}
}
