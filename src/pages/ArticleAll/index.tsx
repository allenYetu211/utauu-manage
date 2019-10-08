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
import { Button } from 'antd';

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
			<ContentHeaderComponent hideGoBack title="">
				<Button>
					<Link to="/ArticleCreate">新建文章</Link>
				</Button>
			</ContentHeaderComponent>

			<ArticleContainer article={article} />
		</div>
	);
};

export default ArticleAllPages;
