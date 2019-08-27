import qs from 'qs';
// @ts-ignore
window.qs = qs;
export const browserInfo = {
	versions: (function() {
		const u = navigator.userAgent;
		return {
			// 移动终端浏览器版本信息
			trident: u.indexOf('Trident') > -1, // IE内核
			presto: u.indexOf('Presto') > -1, // opera内核
			webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
			iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, // 是否iPad
			webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
			weixin: u.indexOf('MicroMessenger') > -1, // 判断是否为微信打开，
			mac: u.indexOf('Mac OS X') > -1,
			windows: u.indexOf('Window') > -1,
			chrome: u.indexOf('Chrome') > -1,
		};
	})(),
};

// 获取url参数
export const getQueryStr = () => {
	// https://testdevcdn.xylink.com/app/enterprise/resource.html?securityKey=727061bfc698a71d6229ab98a507dae016bc1649002&appVersion=2.25.3-3696&platform=android&customizedkey=&r=3882&host=cloud.xylink.com&locale=zh_CN#/
	const queryStr = qs.parse(window.location.search, {
		ignoreQueryPrefix: true,
	});
	const { host } = queryStr;
	queryStr.server = host ? `${window.location.protocol}//${host}` : '';

	return queryStr;
};

export const bytesToSize = (bytes: any) => {
	if (!bytes || bytes === 0 || bytes === '0') return '0 B';
	const k = 1024; // or 1024
	const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return `${(bytes / k ** i).toFixed(2)} ${sizes[i]}`;
};

/**
 * 去除数组中重复的
 * @param array
 */
export const dedupe = (array: any[]) => {
	return Array.from(new Set(array));
};

/**
 * 删除location.search中的参数
 * @param {string[]} keyArr
 * @returns {string}
 */
export const removeSearch = (keyArr: string[]) => {
	const queryObj = qs.parse(window.location.search, {
		ignoreQueryPrefix: true,
	});

	for (const key of keyArr) {
		delete queryObj[key];
	}

	return `?${qs.stringify(queryObj)}`;
};

/**
 * 根据对象的值找key
 * @param obj
 * @param value
 * @param compare
 */
export const findKey = (obj: any, searchValue: number) => {
	let key = '7'; // 其他类型

	if (obj instanceof Object) {
		Object.keys(obj).forEach(function(k) {
			if (obj[k].indexOf(searchValue) > -1) {
				key = k;
			}
		});
	}
	return key;
};

// 节流 - 上拉加载
export const throttle = (fn: any, wait: any) => {
	let lastTime = 0;

	return function(...args: any) {
		const nowTime = +new Date();
		// @ts-ignore
		const context = this;

		if (nowTime - lastTime > wait || !lastTime) {
			fn.apply(context, args);
			lastTime = nowTime;
		}
	};
};
