import { useContext } from 'react';
import StoreContext from './StoreContext';

const useStore = () => {
	// @ts-ignore
	const { state, dispatch } = useContext(StoreContext);
	return { state, dispatch };
};
export default useStore;
