import { getQueryStr } from 'globals/utils/index';

export interface IConfig {
	apiPrefix: string;
}

const queryStr = getQueryStr();

export let config: IConfig = {
	apiPrefix: queryStr.server || '',
};
