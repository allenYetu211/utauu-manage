import Axios, { AxiosInstance, AxiosResponse } from 'axios';
/**
 * @file:
 * @module: http模块拦截
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import { config } from 'globals/config';
import { IConfigOrigin, IGetParams } from 'globals/interfaces/http.interface';

class HttpClient {
	public axios: AxiosInstance;

	public origin: string;

	constructor(readonly configOrigin: IConfigOrigin) {
		this.origin = configOrigin.origin;
		this.axios = Axios.create({
			timeout: 10000,
		});

		// 拦截处理返回内容
		// todo 给出错误提示
		this.axios.interceptors.response.use((response: AxiosResponse) => {
			if (response.data.status === 'Success') {
				return response.data.result;
			}
			return null;
		});
	}

	public async get(param: IGetParams): Promise<any> {
		return this.AXIOS_REQUEST('GET', param);
	}

	public async post(param: IGetParams): Promise<any> {
		return this.AXIOS_REQUEST('POST', param);
	}

	public async put(param: IGetParams): Promise<any> {
		return this.AXIOS_REQUEST('PUT', param);
	}

	public async delete(param: IGetParams): Promise<any> {
		return this.AXIOS_REQUEST('DELETE', param);
	}

	public async AXIOS_REQUEST(
		method:
			| 'get'
			| 'GET'
			| 'delete'
			| 'DELETE'
			| 'head'
			| 'HEAD'
			| 'options'
			| 'OPTIONS'
			| 'post'
			| 'POST'
			| 'put'
			| 'PUT'
			| 'patch'
			| 'PATCH'
			| undefined,
		param: IGetParams,
	): Promise<any> {
		return this.axios({
			baseURL: this.origin,
			url: param.url,
			method,
			params: {
				...param.param,
			},
			data: {
				...param.data,
			},
		});
	}
}

export default new HttpClient(config);
