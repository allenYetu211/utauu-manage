import HTTP_CLIENT from 'globals/http/index';
import { ICreateArticle, ICreateTag } from 'globals/interfaces/http.interface';
import store from 'globals/store';
// 获取全部文章
export const getArticleAll = () => {
	return HTTP_CLIENT.get({ url: 'article' });
};

// 获取分类标签
export const getTagClassArticle = (tag: string) => {
	return HTTP_CLIENT.get({
		url: 'article',
		param: {
			tags: tag,
		},
	});
};

// 获取发布文章
export const getPublishClassArticle = (publishState: boolean) => {
	return HTTP_CLIENT.get({
		url: 'article',
		param: {
			publishState,
		},
	});
};

// 获取文章详情
export const getArticleDetail = (id: number) => {
	return HTTP_CLIENT.get({ url: `article/${id}` });
};

// 获取全部标签
export const getTagsAll = () => {
	store.setTags(HTTP_CLIENT.get({ url: 'tag' }));
	// store.tags = HTTP_CLIENT.get({ url: 'tag' });
};

// 保存编辑文章
export const putEditArticle = (data: ICreateArticle, id: number) => {
	return HTTP_CLIENT.put({
		url: `article`,
		data,
		param: {
			articleID: id,
		},
	});
};

// 新建文章存储文章
export const postCreateArticle = (data: ICreateArticle) => {
	return HTTP_CLIENT.post({ url: 'article', data });
};

// 新建标签
export const postCreateTag = (data: ICreateTag) => {
	try {
		HTTP_CLIENT.post({ url: 'tag', data });
		getTagsAll();
		return true;
	} catch (e) {
		return false;
	}
};

// 删除标签
export const deleteTag = (_id: number) => {
	HTTP_CLIENT.delete({
		url: 'tag',
		param: {
			tagID: _id,
		},
	});
	getTagsAll();
};
