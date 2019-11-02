/* eslint-disable no-return-await */
import HTTP_CLIENT from 'globals/http/index';
import { userStore } from 'globals/store/userStore';

import { message } from 'antd';

import { createHashHistory } from 'history';

const history = createHashHistory();
interface UserInfo {
	username: string;
	password: string;
}

const errorCodeInfo: any = {
	403: '请填写用户信息',
	404: '账号密码错误',
	400: '账号密码错误',
};

class LoginAction {
	public userLogin = async (userInfo: UserInfo) => {
		try {
			const result = await HTTP_CLIENT.post({
				url: '/login',
				data: userInfo,
			});

			localStorage.setItem('token', result.token);

			userStore.setToken(result.token);

			history.push('/ArticleAll');
		} catch (e) {
			message.error(errorCodeInfo[e.response.status] || '未知错误');
		}
	};
}

export default new LoginAction();
