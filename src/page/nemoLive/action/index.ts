import { IConfig, config } from 'globals/config/index';
import { getQueryStr } from 'globals/utils/index';
import HttpClient from 'globals/utils/http/HttpClient';

const queryStr = getQueryStr();

class Action {
	public config: IConfig;
	public store: any;
	public client: HttpClient;

	constructor(config: any) {
		this.config = config;
		this.client = new HttpClient({
			baseURL: config.apiPrefix,
			// baseURL: 'http://172.20.35.247/mock/75/',
			// baseURL: 'http://172.25.48.149:8080/',
			timeout: 30000,
		});
	}

	// 查询云会议室价目表
	public getMeetingRoomList = async () => {
		return this.client.get('/api/rest/v1/order/product/meetingRoom/list');
	};
}

const action = new Action(config);

export { action };
