/* eslint-disable no-return-await */
import HTTP_CLIENT from 'globals/http/index';
import { ICreateArticle, ICreateTag } from 'globals/interfaces/http.interface';
import store from 'globals/store';

// 获取全部文章
export const getArticleAll = async () => {
	return await HTTP_CLIENT.get({ url: 'getArticle' });
};

// 获取分类标签
export const getTagClassArticle = (tag: string) => {
	return HTTP_CLIENT.get({
		url: 'getTagClassArticle',
		params: {
			tags: tag,
		},
	});
};

// 获取发布文章
export const getPublishClassArticle = () => {
	return HTTP_CLIENT.get({
		url: 'getPublishArticle',
	});
};

// 获取文章详情
export const getArticleDetail = (id: number) => {
	return HTTP_CLIENT.get({ url: `getArticleDetail/${id}` });
};

// 获取全部标签
export const getTagsAll = () => {
	const result = HTTP_CLIENT.get({ url: 'getTagAll' });
	store.setTags(result);
	return result;
	// store.tags = HTTP_CLIENT.get({ url: 'tag' });
};

// 保存编辑文章
export const putEditArticle = (data: ICreateArticle, id: number) => {
	return HTTP_CLIENT.put({
		url: `updateArticle`,
		data,
		params: {
			articleID: id,
		},
	});
};

// 新建文章存储文章
export const postCreateArticle = (data: ICreateArticle) => {
	return HTTP_CLIENT.post({ url: 'createArticle', data });
};

// 新建标签
export const postCreateTag = async (data: ICreateTag) => {
	await HTTP_CLIENT.post({ url: 'createTag', data });
};

// 删除标签
export const deleteTag = async (_id: number) => {
	await HTTP_CLIENT.delete({
		url: 'deleteTag',
		params: {
			tagID: _id,
		},
	});
};

export const deleteArticle = async (_id: number) => {
	await HTTP_CLIENT.delete({
		url: 'deleteArticle',
		params: {
			articleId: _id,
		},
	});
};
