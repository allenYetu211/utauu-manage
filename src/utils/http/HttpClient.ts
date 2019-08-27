/**
 * Axios
 */

import Axios, {
	AxiosRequestConfig,
	AxiosInstance,
	AxiosResponse,
	AxiosError,
} from 'axios';

export interface IResponseSuccess {
	code: number;
	data: any;
}

export interface IResponseFailed {
	code: number;
	data: any;
}

class HttpClient {
	public commonOption: AxiosRequestConfig;

	public axios: AxiosInstance;

	constructor(commonOption: AxiosRequestConfig) {
		this.commonOption = commonOption;

		Axios.defaults.timeout = 10000;

		this.axios = Axios.create(commonOption);
		// 添加默认的响应拦截器
		this.axios.interceptors.response.use(
			(response: AxiosResponse): any => {
				if (response.data) {
					return response.data;
				}
				return response;
			},
			(error: AxiosError): Promise<AxiosError> => {
				// return Promise.reject(error);
				console.log('error====>', error);
				return Promise.reject(error);
			},
		);
	}

	public assignOptions = (option?: AxiosRequestConfig) => {
		return Object.assign({}, this.commonOption, option, {
			params: Object.assign(
				{},
				this.commonOption.params,
				option && option.params,
			),
		});
	};

	public get = (url: string, option?: AxiosRequestConfig): any => {
		return this.axios.get(url, this.assignOptions(option)).catch((err) => {
			return {
				err,
			};
		});
	};

	public put = (url: string, data?: any, option?: AxiosRequestConfig): any => {
		return this.axios
			.put(url, data, this.assignOptions(option))
			.catch((err) => {
				return {
					err,
				};
			});
	};

	public post = (url: string, data?: any, option?: AxiosRequestConfig): any => {
		return this.axios
			.post(url, data, this.assignOptions(option))
			.catch((err) => {
				return {
					err,
				};
			});
	};
}

export default HttpClient;
