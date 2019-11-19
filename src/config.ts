// export const config = {
// 	origin: 'http://localhost:7001/',
// };

const setting = {
	prd: 'http://39.106.173.13',
	local: '//localhost:7001/',
};

// @ts-ignore 请求地址
const baseURL = setting[process.env.REACT_APP_BUILD_ENV] || setting.prd;

export { baseURL };
