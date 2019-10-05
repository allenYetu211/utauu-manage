/* eslint-disable no-underscore-dangle */
/**
 * @file: 文章标签
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React from 'react';
import ContentHeaderComponent from 'globals/components/contentHeader/index';
import CardContainerComponent from 'globals/components/cardContainer/index';
import FooterButttonComponent from 'globals/components/footerButton';
import TagsComponent from 'globals/components/tags';
import { postCreateTag, deleteTag } from 'globals/action/httpaction';
import { observer, inject } from 'mobx-react';

import style from './style/style.scss';

interface IState {
	selected: number[];
	tagType: string;
	tagMsg: string;
}
@inject('store')
@observer
export default class ArticleTagPages extends React.Component<any, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			selected: [],
			tagType: '',
			tagMsg: '',
		};
	}

	// 处理tags
	public onChangeSelected = (selecteds: number[]) => {
		this.setState({ selected: selecteds });
	};

	// 删除标签确认事件
	public onDeleteOkTag = async () => {
		const { selected } = this.state;
		const { tags } = this.props.store;
		if (selected.length < 0) {
			return;
		}
		await deleteTag(tags[selected[0]]._id);
		this.setState({ selected: [] });
	};

	// 删除标签取消事件
	public onDeleteCencelTag = () => {
		console.log('onDeleteCencelTag');
	};

	// 创建标签
	public onCreateTagOk = async () => {
		const { tagType, tagMsg } = this.state;
		if (!tagType || !tagMsg) {
			return;
		}
		const result = await postCreateTag({ msg: tagMsg, type: tagType });
		if (result) {
			this.setState({ tagType: '', tagMsg: '' });
		} else {
			console.log('Create Tags Error');
		}
	};

	// 新建标签类型
	public onChangeTagType = (e: any) => {
		this.setState({ tagType: e.target.value });
	};

	// 新建标签描述
	public onChangeTagMsg = (e: any) => {
		this.setState({ tagMsg: e.target.value });
	};

	public render() {
		const { selected, tagType, tagMsg } = this.state;
		const { tags } = this.props.store;
		return (
			<div>
				<ContentHeaderComponent hideGoBack title="标签管理" />

				<div className={style.contentBottomMargin}>
					<CardContainerComponent cardTitlt="全部">
						<div className={style.contentBottomMargin}>
							<TagsComponent
								onChangeSelected={this.onChangeSelected}
								selected={selected}
								tags={tags}
								isHighlight
							/>
						</div>
						<FooterButttonComponent ok={this.onDeleteOkTag} />{' '}
						{/* cancel={this.onDeleteCencelTag} */}
					</CardContainerComponent>
				</div>

				<div>
					<CardContainerComponent cardTitlt="新建标签">
						<div className={style.contentBottomMargin}>
							<div className={style.labelItem}>
								<span>类型</span>
								<input
									className="default__style"
									value={tagType}
									onChange={this.onChangeTagType}
									type="text"
								/>
							</div>

							<div className={style.labelItem}>
								<span>描述</span>
								<input
									className="default__style"
									value={tagMsg}
									onChange={this.onChangeTagMsg}
									type="text"
								/>
							</div>
						</div>

						<FooterButttonComponent ok={this.onCreateTagOk} />
					</CardContainerComponent>
				</div>
			</div>
		);
	}
}
