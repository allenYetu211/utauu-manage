import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateLive from '../app/createLive/index';

import style from './style/index.scss';
// 路由配置
class RouteMap extends React.Component<any, any> {
	render() {
		return (
			<div className={style.container}>
				<Switch>
					<Route exact={true} path="/create" component={CreateLive} />
				</Switch>
			</div>
		);
	}
}

export default RouteMap;
