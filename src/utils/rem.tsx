export default function initFontSize() {
	let whdef, wW, rem;
	const screenWidth = window.innerWidth
		? window.innerWidth
		: document.body.clientWidth;

	if (screenWidth <= 750) {
		whdef = 100 / 750; // 表示750的设计图,使用100PX的默认值
		wW = screenWidth; // 手机窗口的宽度
		rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
		document.documentElement.setAttribute('style', 'font-size: ' + rem + 'px');
	} else {
		// 如果大于750，如ipad
		document.documentElement.setAttribute('style', 'font-size: ' + 56 + 'px');
	}
}
