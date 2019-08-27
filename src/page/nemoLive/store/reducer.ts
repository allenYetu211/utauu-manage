import {
	initialState as baseState,
	reducer as baseReducer,
} from './reducers/baseStore';

const reducer = () => {
	return {
		baseState,
		baseReducer,
	};
};
export default reducer;
