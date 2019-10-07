/**
 * @file: 所有文章
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React, { useEffect, useState } from 'react';
import ContentHeaderComponent from 'globals/components/contentHeader/index';
import CardContainerComponent from 'globals/components/cardContainer/index';
import ArticleContainer from 'globals/components/articles';
import { getArticleAll } from 'globals/action/httpaction';
import { Link } from 'react-router-dom';
import { IArticle } from 'globals/interfaces/interface';

interface IState {
	article: IArticle[];
}

const ArticleAllPages = () => {
	const [article, setArticle] = useState<any[]>([]);

	useEffect(() => {
		(async () => {
			setArticle(await getArticleAll());
		})();
	}, []);

	return (
		<div>
			<ContentHeaderComponent hideGoBack title="所有文章">
				<button type="button">
					<Link to="/ArticleCreate">新建文章</Link>
				</button>
			</ContentHeaderComponent>

			<div>
				<CardContainerComponent>
					<ArticleContainer article={article} />
				</CardContainerComponent>
			</div>
		</div>
	);
};

export default ArticleAllPages;
