/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/**
 * @file:    新建文章内容 、 编辑文章
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React from 'react';
import { withRouter } from 'react-router-dom';

import ContentHeaderComponent from 'globals/components/contentHeader';
import CardContainerComponent from 'globals/components/cardContainer';
import MarkDownComponent from 'globals/components/markdown';
import TagsComponent from 'globals/components/tags';
import {
	putEditArticle,
	postCreateArticle,
	getArticleDetail,
} from 'globals/action/httpaction';

import { observer, inject } from 'mobx-react';
import { ITags, IArticle } from 'globals/interfaces/interface';
import style from './style/style.scss';

interface IState {
	title: string;
	introduce: string;
	tags: ITags[];
	selected: number[];
	markedContent: string;
	content: string;
	isEdit: boolean;
	articleId: number;
	checked: boolean;
}

@inject('store')
@observer
class ArticleCreateOrDetailPage extends React.Component<any, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			title: '',
			introduce: '',
			markedContent: '', // 编辑状态初次渲染
			content: '', // 文章编辑过程中存储
			tags: [],
			selected: [],
			isEdit: false,
			articleId: 0,
			checked: false,
		};
	}

	public async componentDidMount() {
		const { params } = this.props.match;
		if (params.id) {
			const articleResult = await getArticleDetail(params.id);
			this.initHandleEditeArticle(articleResult, params.id);
		}
	}

	// 处理编辑文章初始信息
	public initHandleEditeArticle = (data: IArticle, id: number) => {
		const { title, content, introduce, tags, publishState } = data;
		const selected: number[] = [];
		this.props.store.tags.forEach((item: ITags, index: number) => {
			if (tags.includes(item.msg)) {
				selected.push(index);
			}
		});

		this.setState({
			title,
			introduce,
			content,
			markedContent: content,
			selected,
			articleId: id,
			checked: publishState,
			isEdit: true,
		});
	};

	// 处理标题
	public onTitle = (e: any): void => {
		this.setState({ title: e.target.value });
	};

	// 处理简介
	public onBriefintroduce = (e: any) => {
		this.setState({ introduce: e.target.value });
	};

	// 处理tags
	public onChangeSelected = (selecteds: number[]) => {
		this.setState({ selected: selecteds });
	};

	// 处理marked 内容
	public onChangeMarkedContent = (content: string) => {
		this.setState({ content });
	};

	// 处理文章公布状态公用数据
	public onPublishState = (e: any) => {
		this.setState({ checked: e.target.checked });
	};

	// 处理内容内容
	public onSaveSubmit = async () => {
		const {
			title,
			introduce,
			content,
			selected,
			isEdit,
			articleId,
			checked,
		} = this.state;

		const { tags } = this.props.store;

		const resultTags = selected.map((item: number) => tags[item].msg);

		const submitData = {
			title,
			tags: resultTags,
			introduce,
			content,
			publishState: checked,
			isEdit: true,
		};

		try {
			if (isEdit) {
				await putEditArticle(submitData, articleId);
			} else {
				await postCreateArticle(submitData);
			}
			this.props.history.push('/article-all');
		} catch (e) {
			console.log('创建文章存储失败::', e);
		}
	};

	public render() {
		const {
			title,
			introduce,
			selected,
			markedContent,
			isEdit,
			checked,
		} = this.state;

		const { tags } = this.props.store;
		return (
			<div>
				<ContentHeaderComponent title={isEdit ? '编辑文章' : '新建文章'}>
					<button type="button" onClick={this.onSaveSubmit}>
						保存
					</button>
				</ContentHeaderComponent>
				<div className={style.articleContainer}>
					<div className={style.editContainer}>
						<CardContainerComponent fullHv cardTitlt="基本信息">
							<div className={style.basicsInfoContainer}>
								<div>
									<div className={style.labelItem}>
										<span>文章标题</span>
										<input
											className="default__style"
											value={title}
											onChange={this.onTitle}
											type="text"
										/>
									</div>

									<div className={style.labelItemStart}>
										<span>文章简介</span>
										<textarea
											className="default__style textarea__style"
											value={introduce}
											onChange={this.onBriefintroduce}
										/>
									</div>

									<div className={style.labelItem}>
										<span>文章标签</span>
										<TagsComponent
											onChangeSelected={this.onChangeSelected}
											selected={selected}
											tags={tags}
										/>
									</div>
								</div>
								<div>
									<div className={style.labelItemStart}>
										<span>文章内容</span>
										<div className={style.itemContainer}>
											<MarkDownComponent
												markedContent={markedContent}
												onChangeMarkedContent={this.onChangeMarkedContent}
											/>
										</div>
									</div>
								</div>
							</div>
						</CardContainerComponent>
					</div>

					<div className={style.stateContainer}>
						<CardContainerComponent cardTitlt="发布状态">
							<label>
								<span>公布</span>
								<input
									checked={checked}
									onChange={this.onPublishState}
									type="checkbox"
								/>
							</label>
						</CardContainerComponent>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(ArticleCreateOrDetailPage);
