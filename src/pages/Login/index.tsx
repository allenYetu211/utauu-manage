/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/**
 * @module:  登录模块
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import React from 'react';
import style from './style/style.scss';

const LoginPage = () => {
	return (
		<div className={style.loginContainer}>
			<div className={style.dialogContainer}>
				<label className={style.dialogLine}>
					<span>账号：</span>
					<input type="text" />
				</label>

				<label className={style.dialogLine}>
					<span>密码：</span>
					<input type="passwod" />
				</label>

				<button type="button" className={style.loginButton}>
					登录
				</button>
			</div>
		</div>
	);
};

export default LoginPage;
