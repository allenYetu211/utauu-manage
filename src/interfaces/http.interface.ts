export interface IGetParams {
	url: string;
	data?: any;
	param?: any;
}

export interface IConfigOrigin {
	origin: string;
}

export interface ICreateArticle {
	title: string;
	tags: string[];
	introduce: string;
	content: string;
}

export interface ICreateTag {
	msg: string;
	type: string;
}
