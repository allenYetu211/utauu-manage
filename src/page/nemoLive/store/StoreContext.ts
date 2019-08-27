import { createContext } from 'react';
import reducer from './reducer';

const { baseState } = reducer();

const StoreContext = createContext({
	state: {
		index: baseState,
	},
	dispatch: (item: any) => {},
});

export default StoreContext;
