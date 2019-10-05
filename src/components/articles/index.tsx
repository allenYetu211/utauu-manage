/* eslint-disable no-underscore-dangle */
/**
 * @file:
 * @module:  文章渲染
 * @author:  Allen OYang https://github.com/allenYetu211
 */

import React from 'react';
import { IArticle } from 'globals/interfaces/interface';
import { Link } from 'react-router-dom';
import style from './style/style.scss';

interface IProps {
	article: IArticle[];
}

const ArticleContainer = (props: IProps) => {
	return (
		<div className={style.articleContainer}>
			{props.article.map((item: IArticle, key: number) => {
				const skipPath = `/article-detail/${item._id}`;
				return (
					<div className={style.articleItem} key={key}>
						<h1 className={style.articleTitle}>
							<Link to={skipPath}> title {item.title}</Link>
						</h1>

						<div className={style.articleIntroduce}>
							introduce {item.introduce}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ArticleContainer;

// class ArticleContainer extends React.Component<IProps, any> {

// 	constructor(props: any) {
// 		super(props);
// 	}

// 	public render() {
// 		const { article } = this.props;
// 		return (
// 			<div className={style.articleContainer}>
// 				{article.map((item: IArticle, key: number) => {
// 					const skipPath = `/article-detail/${item._id}`;
// 					return (
// 						<div className={style.articleItem} key={key}>
// 							<h1 className={style.articleTitle}>
// 								<Link to={skipPath}> title {item.title}</Link>
// 							</h1>

// 							<div className={style.articleIntroduce}>
// 								introduce {item.introduce}
// 							</div>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		);
// 	}
// }
