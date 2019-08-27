import React, { useReducer } from 'react';
import StoreContext from './StoreContext';
import reducer from './reducer';

const { baseState, baseReducer } = reducer();

const useCombinedReducer = (combinedReducers: any) => {
	// Global State
	const state = Object.keys(combinedReducers).reduce(
		(acc, key) => ({ ...acc, [key]: combinedReducers[key][0] }),
		{},
	);

	// Global Dispatch Function
	const dispatch = (action: any) =>
		Object.keys(combinedReducers)
			.map((key) => combinedReducers[key][1])
			.forEach((fn) => fn(action));

	return [state, dispatch];
};

const Provider = ({ children }: { children: any }) => {
	// const [state, dispatch] = useReducer(reducer, initialState);
	const [state, dispatch] = useCombinedReducer({
		base: useReducer(baseReducer, baseState),
	});
	console.log(state);

	return (
		//@ts-ignore
		<StoreContext.Provider value={{ state, dispatch }}>
			{children}
		</StoreContext.Provider>
	);
};

export default Provider;
