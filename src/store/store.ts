import { createContext } from 'react';
import { userStore, UserStore } from './userStore';

const store = {
	userStore,
};

export interface IStore {
	userStore: UserStore;
}

export default createContext(store);
