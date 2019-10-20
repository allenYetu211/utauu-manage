/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/**
 * @module:  登录模块
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React, { useState } from 'react';
import { Card, Input, Button } from 'antd';
import action from 'globals/action';

import style from './style/style.scss';

const LoginPage = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return (
		<div className={style.loginContainer}>
			<Card title="UTAUU" bordered={false}>
				<label className={style.dialogLine}>
					<span>账号：</span>
					<Input
						value={username}
						type="text"
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
				</label>

				<label className={style.dialogLine}>
					<span>密码：</span>
					<Input
						value={password}
						type="password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</label>

				<div className={style.loginButtonContainer}>
					<Button
						onClick={() => {
							action.loginAction.userLogin({
								username,
								password,
							});
						}}>
						登录
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default LoginPage;
