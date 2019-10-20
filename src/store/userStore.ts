import { decorate, action, observable, computed } from 'mobx';

class UserStore {
	@observable token: string = '';

	@action
	public setToken = (token: string) => {
		this.token = token;
	};
}

const userStore = new UserStore();

export { userStore, UserStore };
