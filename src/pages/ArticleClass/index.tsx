/* eslint-disable no-use-before-define */
/**
 * @file: 分类目录
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React, { useState, useEffect } from 'react';
import ContentHeaderComponent from 'globals/components/contentHeader/index';
import CardContainerComponent from 'globals/components/cardContainer/index';
import ArticleContainer from 'globals/components/articles';
import TagsComponent from 'globals/components/tags';
import { IArticle, ITags } from 'globals/interfaces/interface';
import { getTagClassArticle, getTagsAll } from 'globals/action/httpaction';
import { Card } from 'antd';

import style from './style/index.scss';

interface IState {
	article: IArticle[];
	selected: number[];
}

const ArticleClassPages = () => {
	const [article, setArticle] = useState<IArticle[]>([]);
	const [tags, setTags] = useState<ITags[]>([]);
	const [selected, setSelected] = useState<number[]>([0]);

	// 获取全部标签
	const getTagsAllFc = async () => {
		const tagResult: any = await getTagsAll();
		setTags(tagResult);
		if (tagResult.length > 0) {
			getTagClassArticleInfo(tagResult[0].msg);
		}
	};

	//  根据标签获取新数据
	const getTagClassArticleInfo = async (tagClass: string) => {
		const articleResult = await getTagClassArticle(tagClass);
		setArticle(articleResult);
	};

	// 处理tags
	const onChangeSelected = (changeSelected: number[]) => {
		if (changeSelected[0] === selected[0]) {
			return;
		}
		getTagClassArticleInfo(tags[changeSelected[0]].msg);
		setSelected(changeSelected);
	};

	useEffect(() => {
		getTagsAllFc();
	}, []);

	return (
		<div>
			<ContentHeaderComponent hideGoBack title="分类文章" />

			<div className={style.tagContainer}>
				<Card bordered={false}>
					<TagsComponent
						onChangeSelected={onChangeSelected}
						selected={selected}
						tags={tags}
						isHighlight
					/>
				</Card>
			</div>

			<ArticleContainer hideTags article={article} />
		</div>
	);
};

export default ArticleClassPages;
