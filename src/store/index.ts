import { observable, action } from 'mobx';

import { ITags } from 'globals/interfaces/interface';

class Store {
	@observable public tags: ITags[] = [];

	@action
	public setTags = (tag: any) => {
		this.tags = tag;
	};
}

export default new Store();
