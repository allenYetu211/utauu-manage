const proxy = require('http-proxy-middleware');
const PROXY_ENV = process.env.REACT_APP_PROXY_ENV;
const PROXY_IP = process.env.REACT_APP_PROXY_IP;
let proxySetting;

const devProxy = function(app) {
	app.use(
		proxy('/websocket', {
			target: 'http://testdev.xylink.com/',
			changeOrigin: true,
			ws: true,
		}),
	);
	app.use(
		proxy('/api', {
			target: 'https://testdev.xylink.com/',
			changeOrigin: true,
		}),
	);
};

const preProxy = function(app) {
	app.use(
		proxy('/websocket', {
			target: 'http://cloud.xylink.com/',
			changeOrigin: true,
			ws: true,
		}),
	);
	app.use(
		proxy('/api', {
			target: 'https://cloud.xylink.com/',
			changeOrigin: true,
		}),
	);
};

const privateProxy = function(app) {
	app.use(
		proxy('/websocket', {
			target: PROXY_IP,
			changeOrigin: true,
			ws: true,
		}),
	);
	app.use(
		proxy('/api', {
			target: PROXY_IP,
			changeOrigin: true,
		}),
	);
};

switch (PROXY_ENV) {
	case 'private':
		proxySetting = privateProxy;
		break;

	case 'dev':
		proxySetting = devProxy;

		break;
	case 'pre':
		proxySetting = preProxy;
		break;

	default:
		proxySetting = devProxy;
		break;
}

module.exports = proxySetting;
