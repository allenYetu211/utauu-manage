/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 10:53:42
 * @LastEditTime: 2019-08-30 10:38:25
 * @LastEditors: Please set LastEditors
 */
import { asyncComponent } from 'react-async-component';

// const LoadingComponent: any = Loading;
// const ErrorComponent: any = Error;

/* eslint-disable */
export const routerConfig = [
	// 登录页
	{
		path: '/ArticleAll',
		component: asyncComponent({
			resolve: () => import('globals/pages/ArticleAll'),
			// LoadingComponent,
			// ErrorComponent,
		}),
	},
	{
		path: '/ArticleClass',
		component: asyncComponent({
			resolve: () => import('globals/pages/ArticleClass'),
			// LoadingComponent,
			// ErrorComponent,
		}),
	},
	{
		path: '/ArticleTag',
		component: asyncComponent({
			resolve: () => import('globals/pages/ArticleTag'),
			// LoadingComponent,
			// ErrorComponent,
		}),
	},
	{
		path: '/Articlepublish',
		component: asyncComponent({
			resolve: () => import('globals/pages/Articlepublish'),
			// LoadingComponent,
			// ErrorComponent,
		}),
	},
	{
		path: '/ArticleCreate',
		component: asyncComponent({
			resolve: () => import('globals/pages/ArticleCreateOrDetail'),
			// LoadingComponent,
			// ErrorComponent,
		}),
	},
	{
		path: '/ArticleDetail/:id',
		component: asyncComponent({
			resolve: () => import('globals/pages/ArticleCreateOrDetail'),
			// LoadingComponent,
			// ErrorComponent,
		}),
	},
];
