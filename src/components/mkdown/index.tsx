import React from 'react';

import Editor from 'for-editor';

import style from './style/index.scss';

interface Porps {
	value: any;
	mkChange: (value: string) => void;
}

const toolbar = {
	h1: true, // h1
	h2: true, // h2
	h3: true, // h3
	h4: true, // h4
	img: true, // 图片
	link: true, // 链接
	code: true, // 代码块
	preview: true, // 预览
	expand: true, // 全屏
	/* v0.0.9 */
	undo: false, // 撤销
	redo: false, // 重做
	save: false, // 保存
	/* v0.2.3 */
	subfield: true, // 单双栏模式
};
const MKDownComponent = (props: Porps) => {
	return (
		<div className={style.editor}>
			<Editor
				toolbar={toolbar}
				value={props.value}
				onChange={(value) => props.mkChange(value)}
			/>
		</div>
	);
};

export default MKDownComponent;
