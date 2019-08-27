/**
 * Native 和 H5 交互模块
 * https://tower.im/projects/04b476c2ba144da2ba4552e84eac1847/docs/ff9f1b812e454481a4863659329a9b3a/
 */
import { browserInfo } from './index';

const unknownBrowser = '非App内打开';

/*global  xylink:true*/
class Native {
	private isAndroid = browserInfo.versions.android;
	private isIos = browserInfo.versions.ios;

	// 设置title
	setTitle(title: string) {
		try {
			if (this.isAndroid) {
				//@ts-ignore
				xylink.setTitle(title);
			} else if (this.isIos) {
				//@ts-ignore
				window.webkit.messageHandlers.setTitle.postMessage([title]);
			} else {
				console.log(unknownBrowser);
			}
		} catch (err) {
			console.log('setTitle onError:', err);
		}
	}

	// 左上角设置操作
	setCloseCallback(funcName: any) {
		try {
			if (this.isAndroid) {
				//@ts-ignore
				xylink.setCloseCallback(funcName);
			} else if (this.isIos) {
				//@ts-ignore
				window.webkit.messageHandlers.setCloseCallback.postMessage([funcName]);
			} else {
				console.log(unknownBrowser);
			}
		} catch (err) {
			console.log('closeCallback onError:', err);
		}
	}

	//  调用native返回上一页
	webViewGoBack() {
		try {
			if (this.isAndroid) {
				//@ts-ignore
				xylink.webViewGoBack();
			} else if (this.isIos) {
				//@ts-ignore
				window.webkit.messageHandlers.webViewGoBack.postMessage([]);
			} else {
				console.log(unknownBrowser);
			}
		} catch (err) {
			console.log('close onError:', err);
		}
	}

	// * 关闭函数名称：xylink.close() 在页面上可主动调用这个函数
	close() {
		try {
			if (this.isAndroid) {
				//@ts-ignore
				xylink.close();
			} else if (this.isIos) {
				//@ts-ignore
				window.webkit.messageHandlers.close.postMessage([]);
			} else {
				console.log(unknownBrowser);
			}
		} catch (err) {
			console.log('close onError:', err);
		}
	}

	/**
	 * 在新页面打开url，即重新打开一个webview页面
	 * @param url 要跳转的页面地址
	 * @param title 要跳转的页面显示的标题
	 * @param isAbsolutePath  是否为绝对路径。如果该值为true,则说明为外部链接，native可直接加载，如果该值为false，则说明为该url是内容跳转链接，需native处理
	 * ------- true  为绝对地址，直接从网络加载
	 * ------- false 为相对地址，从 native加载
	 */
	redirect(url: string, title: string, isAbsolutePath: boolean) {
		if (!title) title = '';
		isAbsolutePath = isAbsolutePath || false;
		try {
			if (this.isAndroid) {
				//@ts-ignore
				xylink.redirect(url, title, isAbsolutePath);
			} else if (this.isIos) {
				//@ts-ignore
				window.webkit.messageHandlers.redirect.postMessage([
					url,
					title,
					isAbsolutePath,
				]);
			} else {
				console.log(unknownBrowser);
			}
		} catch (err) {
			console.log('redirect onError:', err);
			window.location.href = url;
		}
	}

	/**
	 * 在当前页面打开url
	 * @param {*} url 如上
	 * @param {*} title 如上
	 * @param {*} isAbsolute 如上
	 */
	forward(url: string, title: string, isAbsolute: boolean) {
		if (!isAbsolute) isAbsolute = false;
		try {
			if (this.isAndroid) {
				//@ts-ignore
				xylink.forward(url, title, isAbsolute);
			} else if (this.isIos) {
				//@ts-ignore
				window.webkit.messageHandlers.forward.postMessage([
					url,
					title,
					isAbsolute,
				]);
			} else {
				console.log(unknownBrowser);
			}
		} catch (err) {
			this.weblog('forward function error', JSON.stringify(err));
		}
	}

	// --------------------------------------
	// 右上角按钮
	// --------------------------------------

	/**
	 *
	 * @param {*} actionName
	 * 展现的文字
	 type: String
	 default: none
	 没有的话传空字符串 ''
	 * @param {*} isHighlight
	 * type: bool
	 default: false, 必传
	 true代表高亮 （蓝色）
	 false代表不高亮 （白色
	 * @param {*} callback
	 * type： String
	 default: none
	 点击这个按钮要触发的函数名
	 * @param {*} type
	 * type: Number
	 default: none
	 value
	 0 文字
	 1 蓝色三个点
	 2 加号(白色)
	 3 三个点（白色）
	 */
	setAction(
		actionName: string,
		isHighlight: boolean,
		callback: string,
		type: number,
	) {
		try {
			if (this.isAndroid) {
				//@ts-ignore
				xylink.setAction(actionName, isHighlight, callback, type);
			} else if (this.isIos) {
				//@ts-ignore
				window.webkit.messageHandlers.setAction.postMessage([
					actionName,
					isHighlight,
					callback,
					type,
				]);
			} else {
				console.log(unknownBrowser);
			}
		} catch (err) {
			console.log('setAction error: ', err);
		}
	}

	/**
	 * 往 native 写 log
	 * @param level info error
	 * @param fnName 当前函数名，用于定位
	 * @param desc 描述
	 * @param data 具体数据
	 */
	setWebLog = (level: any, fnName: string, desc: any, data: any) => {
		let tag = 'h5-log',
			logDesc =
				'[' +
				level +
				']' +
				'fnName: ' +
				fnName +
				'.   ' +
				(desc ? 'desc: ' + desc + '.  ' : '') +
				(data ? 'data: ' + JSON.stringify(data) + '.  ' : '');

		var p = document.createElement('p');
		p.innerHTML = logDesc;
		var debugBox = document.getElementById('debugBox');
		if (debugBox) {
			debugBox.appendChild(p);
		}
		this.weblog(tag, logDesc);
	};

	/**
	 * 设置log
	 * @param {string} name log 名
	 * @param {any} message 消息
	 */
	weblog(name: string, message: string) {
		let version = '';
		const debug = false;
		if (!message) message = '';
		message = typeof message !== 'string' ? JSON.stringify(message) : message;
		version = `H5WebAppVersion: ${version}`;
		message = `${message} ${version}`;
		try {
			if (debug) {
				console.log('=====name: ' + name);
				if (/err/.test(message)) {
					console.error('err message: ' + message);
				} else {
					console.log('message: ' + message);
				}
				return;
			}
			if (this.isAndroid) {
				//@ts-ignore
				xylink.webLog(name, message);
			} else if (this.isIos) {
				//@ts-ignore
				window.webkit.messageHandlers.webLog.postMessage([name, message]);
			} else {
				return unknownBrowser;
			}
		} catch (err) {
			if (debug) {
				console.log('write weblog error. data:', err.toString());
				return;
			}
		}
	}

	/**
	 * 调用native扫一扫
	 * @param {any} func 回调函数
	 */
	scanQRCode = (func: any) => {
		try {
			if (this.isAndroid) {
				//@ts-ignore
				xylink.scanQRCode(func);
			} else if (this.isIos) {
				//@ts-ignore
				window.webkit.messageHandlers.getUserProfile.scanQRCode([func]);
			} else {
				return unknownBrowser;
			}
		} catch (err) {
			console.log('scanQRCode err:', err);
		}
	};

	/**
	 * 分享到微信
	 * @param {Object} desc
	 */
	shareToWeChat = (params: {
		from: string;
		shareType: 'mp' | 'card';
		content: {
			title: string;
			desc: string | object;
			img: string;
			params: string;
		};
	}) => {
		const conStr = JSON.stringify(params);

		try {
			if (this.isAndroid) {
				// @ts-ignore
				xylink.shareToWeChat(conStr);
			} else if (this.isIos) {
				// @ts-ignore
				window.webkit.messageHandlers.shareToWeChat.postMessage([conStr]);
			} else {
				console.log('分享失败');
			}
		} catch (err) {
			console.log('shareToWeChat err:', err);
		}
	};
}

const native = new Native();

export { native };
