/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from 'react';
import { Switch, Redirect, Link, Route } from 'react-router-dom';
import { Menu, Layout, Icon } from 'antd';

import PrivateRoute from 'globals/router/privateRoute';

import action from 'globals/action';

import { routerConfig } from './router';
// import { config } from './config';
import style from './style/index.scss';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const HomePage = () => {
	useEffect(() => {
		action.initAction.checkoutToken();
	}, []);

	return (
		<Layout style={{ height: '100vh' }}>
			{/* <HeaderTpl /> */}
			<Layout>
				<Sider
					trigger={null}
					collapsible
					// collapsed={collapsed}
				>
					<Menu mode="inline">
						<Menu.Item key="1">首页</Menu.Item>
						<SubMenu
							title={
								<span>
									<Icon type="mail" />
									<span>文章</span>
								</span>
							}>
							<Menu.Item key="5">
								<Link to="/ArticleAll">所有文章</Link>
							</Menu.Item>

							<Menu.Item key="6">
								<Link to="/ArticleClass">分类目录</Link>
							</Menu.Item>

							<Menu.Item key="7">
								<Link to="/Articlepublish">发布文章</Link>
							</Menu.Item>

							<Menu.Item key="8">
								<Link to="/ArticleTag">文章标签</Link>
							</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>

				<Layout>
					<Content className={style.mainContent}>
						<Switch>
							{routerConfig.map((item: any) => {
								return (
									<PrivateRoute
										permissions={item.permission}
										path={item.path}
										component={item.component}
										key={item.path}
										redirect={item.redirect}>
										{item.children}
									</PrivateRoute>
								);
							})}
						</Switch>
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default HomePage;
