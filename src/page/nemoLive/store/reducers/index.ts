export const initialState = {
	from: 'xyLink',
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
