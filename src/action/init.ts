/* eslint-disable no-debugger */
/* eslint-disable no-return-await */
import HTTP_CLIENT from 'globals/http/index';
import { userStore } from 'globals/store/userStore';

import { message } from 'antd';

import { createHashHistory } from 'history';
import useState from 'react';

const history = createHashHistory();
interface UserInfo {
	username: string;
	password: string;
}

const errorCodeInfo: any = {
	403: '请填写用户信息',
	404: '账号密码错误',
};

class LoginAction {
	public checkoutToken = async () => {
		const localToken = localStorage.getItem('token');

		if (!localToken) {
			history.push('/Login');
			return;
		}

		userStore.setToken(localToken);

		try {
			await HTTP_CLIENT.get({
				url: 'u/v/admin/checkToken',
			});
		} catch (e) {
			console.log('e.response.status ', e);
			if (!e.response) {
				message.error('异常错误');
				history.push('/Login');
				return;
			}

			if (e.response.status === 415) {
				message.error('用户登录已过期');
				history.push('/Login');
			}
		}
	};
}

export default new LoginAction();
