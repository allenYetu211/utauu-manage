/* eslint-disable no-underscore-dangle */
/**
 * @file: 文章标签
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React, { useState, useEffect } from 'react';
import ContentHeaderComponent from 'globals/components/contentHeader/index';
import CardContainerComponent from 'globals/components/cardContainer/index';
import FooterButttonComponent from 'globals/components/footerButton';
import TagsComponent from 'globals/components/tags';
import { ITags } from 'globals/interfaces/interface';
import {
	postCreateTag,
	deleteTag,
	getTagsAll,
} from 'globals/action/httpaction';

import { Input, message, Card } from 'antd';

import style from './style/style.scss';

interface IState {
	selected: number[];
	tags: ITags[];
	tagType: string;
	tagMsg: string;
}

export const ArticleTagPages = () => {
	const [selected, setSelected] = useState<number[]>([]);
	const [tags, setTags] = useState<ITags[]>([]);
	const [tagType, setTagType] = useState<string>('');
	const [tagMsg, setTagMsg] = useState<string>('');

	// 获取全部标签
	const getTagsAllFc = async () => {
		const tagResult: any = await getTagsAll();
		setTags(tagResult);
	};

	// 处理tags
	const onChangeSelected = (selecteds: number[]) => {
		setSelected(selecteds);
	};

	// 删除标签确认事件
	const onDeleteOkTag = async () => {
		if (selected.length < 0) {
			return;
		}
		try {
			await deleteTag(tags[selected[0]]._id);
			setSelected([]);

			await getTagsAllFc();
		} catch (e) {
			message.error({
				content: '删除失败',
			});
		}
	};

	// 删除标签取消事件
	//  const onDeleteCencelTag = () => {
	// 	console.log('onDeleteCencelTag');
	// };

	// 创建标签
	const onCreateTagOk = async () => {
		try {
			await postCreateTag({ msg: tagMsg });
			setTagMsg('');
			await getTagsAllFc();
		} catch (e) {
			console.log('Create Tags Error', e);
		}
	};

	useEffect(() => {
		getTagsAllFc();
	}, []);

	// // 新建标签类型
	// public onChangeTagType = (e: any) => {
	// 	this.setState({ tagMsg: e.target.value });
	// };

	// 新建标签描述
	const onChangeTagMsg = (e: any) => {
		setTagMsg(e.target.value);
	};

	return (
		<>
			<ContentHeaderComponent hideGoBack title="标签管理" />
			<div className={style.tagCard}>
				<Card
					title="全部标签"
					extra={<FooterButttonComponent ok={onDeleteOkTag} okText="删除" />}>
					<div className={style.contentBottomMargin}>
						<TagsComponent
							onChangeSelected={onChangeSelected}
							selected={selected}
							tags={tags}
							isHighlight
						/>
					</div>
				</Card>

				<Card
					title="新建标签"
					extra={<FooterButttonComponent ok={onCreateTagOk} />}>
					<Input
						value={tagMsg}
						onChange={onChangeTagMsg}
						placeholder="添加新标签"
					/>
				</Card>
			</div>
		</>
	);
};

export default ArticleTagPages;
