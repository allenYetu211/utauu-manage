import { getQueryStr } from 'globals/utils/index.ts';

const { v, securityKey, appVersion, platform, h, deviceType } = getQueryStr();

export const initialState = {
	v: v,
	securityKey: securityKey,
	appVersion: appVersion,
	platform: platform,
	h: h,
	deviceType: deviceType,
};

export type State = typeof initialState;

export type Action = {
	type?: string;
	data?: any;
};

export const reducer = (state: State, action: Action) => {
	if (!action.type && !action.data) {
		return {
			...state,
			...action,
		};
	}
	switch (action.type) {
		case 'updateData':
			return {
				...state,
				...action.data,
			};
		default:
			return state;
	}
};
