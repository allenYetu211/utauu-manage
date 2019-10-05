/**
 * @file: 分类目录
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React from 'react';
import ContentHeaderComponent from 'globals/components/contentHeader/index';
import CardContainerComponent from 'globals/components/cardContainer/index';
import ArticleContainer from 'globals/components/articles';
import TagsComponent from 'globals/components/tags';
import { IArticle } from 'globals/interfaces/interface';
import { getTagClassArticle } from 'globals/action/httpaction';
import { observer, inject } from 'mobx-react';

interface IState {
	article: IArticle[];
	selected: number[];
}
@inject('store')
@observer
export default class ArticleClassPages extends React.Component<any, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			article: [],
			selected: [0],
		};
	}

	public async componentDidMount() {
		const { tags } = this.props.store;
		this.getTagClassArticleInfo(tags[0] ? tags[0].msg : '前端');
	}

	public getTagClassArticleInfo = async (tagClass: string) => {
		const articleResult = await getTagClassArticle(tagClass);
		this.setState({ article: articleResult });
	};

	// 处理tags
	public onChangeSelected = (selecteds: number[]) => {
		if (selecteds[0] === this.state.selected[0]) {
			return;
		}
		const { tags } = this.props.store;
		this.getTagClassArticleInfo(tags[selecteds[0]].msg);
		this.setState({ selected: selecteds });
	};

	public render() {
		const { article, selected } = this.state;
		const { tags } = this.props.store;
		return (
			<div>
				<ContentHeaderComponent hideGoBack title="已发布文章" />

				<div>
					<CardContainerComponent>
						<div>
							<TagsComponent
								onChangeSelected={this.onChangeSelected}
								selected={selected}
								tags={tags}
								isHighlight
							/>
						</div>

						<div>
							<ArticleContainer article={article} />
						</div>
					</CardContainerComponent>
				</div>
			</div>
		);
	}
}
