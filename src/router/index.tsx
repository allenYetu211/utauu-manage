import React from 'react';
import HomePage from 'globals/router/childrs/index';
import { Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';
import Login from 'globals/pages/Login';

const history = createHashHistory();

const RouterComponent = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/Login" component={Login} />
				<Route path="/" component={HomePage} />
			</Switch>
		</Router>
	);
};

export default RouterComponent;
