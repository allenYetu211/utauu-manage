/**
 * @file: 路由模块
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import style from 'globals/routes/style/stlye.scss';
import IndexPage from 'globals/pages/index';
import LoginPage from 'globals/pages/Login';

import ColumnChildsComponent from 'globals/routes/columnChilds/index';
import ColumnItemComponent from 'globals/routes/cloumnItem/index';
import { IParentContainer } from 'globals/interfaces/routes.interface';
import ArticleAll from 'globals/pages/ArticleAll';
import ArticleClass from 'globals/pages/ArticleClass';
import ArticleTag from 'globals/pages/ArticleTag';
import Articlepublish from 'globals/pages/Articlepublish';
import ArticleCreateOrDetail from 'globals/pages/ArticleCreateOrDetail';
// import ArticleDetail from 'globals/pages/ArticleDetail'
import { getTagsAll } from 'globals/action/httpaction';

interface IState {
	targetCount: number;
	parentContainer: IParentContainer[];
}

export default class BrowserRouters extends React.Component<any, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			targetCount: 0,
			parentContainer: [
				{
					column: {
						to: '/',
						txt: '首页',
					},
				},
				{
					childs: {
						txt: '文章管理',
						column: [
							{
								to: '/article-all',
								txt: '所有文章',
							},
							{
								to: '/article-class',
								txt: '分类目录',
							},
							{
								to: '/article-publish',
								txt: '发布文章',
							},
							{
								to: '/article-tag',
								txt: '文章标签',
							},
						],
					},
				},
			],
		};
	}

	public async componentDidMount() {
		await getTagsAll();
	}

	public onTargetLiClount = (index: number) => {
		this.setState({ targetCount: index });
	};

	public render() {
		const { parentContainer, targetCount } = this.state;
		return (
			<Router>
				<div className={style.routeContent}>
					<div className={style.routeSide}>
						<ul className={style.sideParentContainer}>
							{parentContainer.map((item: IParentContainer, index: number) => {
								if (item.column) {
									return (
										<ColumnItemComponent
											onTargetLiClount={this.onTargetLiClount}
											targetCount={targetCount}
											key={index}
											index={index}
											column={item.column}
										/>
									);
								}
								if (item.childs) {
									return (
										<ColumnChildsComponent
											onTargetLiClount={this.onTargetLiClount}
											targetCount={targetCount}
											key={index}
											index={index}
											childs={item.childs}
										/>
									);
								}
								return '';
							})}
						</ul>
					</div>

					<div className={style.routeContainer}>
						<Route exact path="/" component={IndexPage} />
						<Route path="/article-all" component={ArticleAll} />
						<Route path="/article-class" component={ArticleClass} />
						<Route path="/article-tag" component={ArticleTag} />
						<Route path="/article-publish" component={Articlepublish} />
						<Route path="/article-create" component={ArticleCreateOrDetail} />
						<Route
							path="/article-detail/:id"
							component={ArticleCreateOrDetail}
						/>
						<Route path="/login" component={LoginPage} />
					</div>
				</div>
			</Router>
		);
	}
}
