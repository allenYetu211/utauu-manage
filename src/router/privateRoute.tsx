import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IProps {
	permissions?: string[];
	component: any;
	path: string;
	exact?: boolean;
	render?: any;
	children?: any;
	redirect?: any;
}

const PrivateRouteComponent = (props: IProps) => {
	const { permissions, children, component: Component, ...rest } = props;
	return (
		<Route
			exact={props.exact}
			render={(RouteComponentProps: any) => {
				return <Component {...RouteComponentProps}>{props.children}</Component>;
			}}
		/>
	);
};

export default PrivateRouteComponent;
