/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/**
 * @file:    新建文章内容 、 编辑文章
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React, { useEffect, useState } from 'react';

import ContentHeaderComponent from 'globals/components/contentHeader';
// import MarkDownComponent from 'globals/components/markdown';
import MKDownComponent from 'globals/components/mkdown';

import TagsComponent from 'globals/components/tags';
import {
	putEditArticle,
	postCreateArticle,
	getArticleDetail,
	getTagsAll,
	deleteArticle,
} from 'globals/action/httpaction';

import { Checkbox, Button, Card, Input, message, Modal, Upload } from 'antd';

import { ITags, IArticle } from 'globals/interfaces/interface';

import { createHashHistory } from 'history';

import style from './style/style.scss';

const history = createHashHistory();

const { TextArea } = Input;

const { confirm } = Modal;

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

const ArticleCreateOrDetailPage = (props: any) => {
	const [title, setTitle] = useState<string>('');
	const [introduce, setIntroduce] = useState<string>('');
	const [markedContent, setMarkedContent] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [tags, setTags] = useState<ITags[]>([]);
	const [selected, setSelected] = useState<number[]>([]);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [checked, setChecked] = useState<boolean>(false);
	const [articleId, setArticleId] = useState<number>(0);

	// 初始编辑信息
	const initHandleEditeArticle = (
		data: IArticle,
		id: number,
		tagResult: any,
	) => {
		const tSelected: number[] = [];
		tagResult.forEach((item: any, index: number) => {
			if (data.tags.includes(item.msg)) {
				tSelected.push(index);
			}
		});

		setTitle(data.title);
		setIntroduce(data.introduce);
		setContent(data.content);
		setMarkedContent(data.content);
		setSelected(tSelected);
		setArticleId(id);
		setChecked(data.publishState);
		setIsEdit(true);
	};

	//  获取详情
	const initGetArticleDetail = async (id: number, tagResult: any) => {
		const articleResult = await getArticleDetail(id);
		initHandleEditeArticle(articleResult, id, tagResult);
	};

	// 获取全部标签
	const initArticle = async () => {
		const tagResult: any = await getTagsAll();
		setTags(tagResult);
		const { pathname } = props.location;
		if (/ArticleDetail/.test(pathname)) {
			const id = pathname.replace(/\/ArticleDetail\/(.\w)/g, '$1');
			if (id) {
				await initGetArticleDetail(id, tagResult);
			}
		}
	};

	// 处理标题
	const onTitle = (e: any): void => {
		setTitle(e.target.value);
	};

	// 处理简介
	const onBriefintroduce = (e: any) => {
		setIntroduce(e.target.value);
	};

	// 处理tags
	const onChangeSelected = (selecteds: number[]) => {
		setSelected(selecteds);
	};

	// 处理marked 内容
	const onChangeMarkedContent = (value: string) => {
		setContent(value);
		setMarkedContent(value);
	};

	// 处理文章公布状态公用数据
	const onPublishState = (e: any) => {
		setChecked(e.target.checked);
	};

	const actionDeleteArtice = async () => {
		confirm({
			title: `确认删除？`,
			content: (
				<div>
					<h1>{title}</h1>
					<p>状态 {checked ? '公布' : '未公布'}</p>
				</div>
			),
			okText: '确认',
			cancelText: '取消',
			onOk: async () => {
				try {
					await deleteArticle(articleId);
					history.push('/ArticleAll');
				} catch (e) {
					message.error('删除失败');
				}
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	// 处理内容内容
	const onSaveSubmit = async () => {
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
			props.history.push('/ArticleAll');
		} catch (e) {
			message.error('保存失败');
			console.log('创建文章存储失败::', e);
		}
	};

	useEffect(() => {
		initArticle();
	}, []);

	return (
		<div>
			<ContentHeaderComponent>
				{isEdit && (
					<Button style={{ marginRight: '10px' }} onClick={actionDeleteArtice}>
						删除
					</Button>
				)}
				<Button onClick={onSaveSubmit}>保存</Button>
			</ContentHeaderComponent>

			<div className={style.articleContainer}>
				<div className={style.editContainer}>
					<Card title="基本信息" bordered={false}>
						<div className={style.basicsInfoContainer}>
							<div>
								<div className={style.labelItem}>
									<span>文章标题</span>
									<Input value={title} onChange={onTitle} type="text" />
								</div>

								<div className={style.labelItemStart}>
									<span>文章简介</span>
									<TextArea value={introduce} onChange={onBriefintroduce} />
								</div>

								<div className={style.labelItem}>
									<span>文章标签</span>
									<div style={{ flex: 1 }}>
										<TagsComponent
											onChangeSelected={onChangeSelected}
											selected={selected}
											tags={tags}
										/>
									</div>
								</div>
							</div>
							<div>
								<div className={style.labelItemStart}>
									<span>文章内容</span>
									<div className={style.itemContainer}>
										{/* <MarkDownComponent
											markedContent={markedContent}
											onChangeMarkedContent={onChangeMarkedContent}
										/> */}
										<MKDownComponent
											value={markedContent}
											mkChange={onChangeMarkedContent}
										/>
									</div>
								</div>
							</div>
						</div>
					</Card>
				</div>

				<div className={style.stateContainer}>
					<div className={style.item}>
						<Card title="发布状态" bordered={false}>
							<Checkbox checked={checked} onChange={onPublishState}>
								公布
							</Checkbox>
						</Card>
					</div>

					<div className={style.item}>
						{/* <Card title="封面图" bordered={false}>
							<Upload
								name="avatar"
								listType="picture-card"
								className="avatar-uploader"
								showUploadList={false}
								action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
								beforeUpload={beforeUpload}
								onChange={this.handleChange}
							>
							{imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
							</Upload>
						</Card> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleCreateOrDetailPage;
