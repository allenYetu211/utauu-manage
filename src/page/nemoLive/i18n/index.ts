import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import zh_CN from './locale/zh_CN';
import en_US from './locale/en_US';
import zh_TW from './locale/zh_TW';

const lngDetector = new LanguageDetector(null, {
	lookupQuerystring: 'locale',
});

i18n
	.use(lngDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en-US',
		debug: true,
		resources: {
			'en-US': { translation: en_US },
			'zh-CN': { translation: zh_CN },
			'zh-HANS_US': { translation: zh_CN },
			'zh-TW': { translation: zh_TW },
			'en-CN': { translation: en_US },
			en_CN: { translation: en_US },
			en_US: { translation: en_US },
			zh_CN: { translation: zh_CN },
			zh_TW: { translation: zh_TW },
		},
		interpolation: {
			escapeValue: false, // 避免将特殊字符转译成xss的安全码
		},
	});

export default i18n;
