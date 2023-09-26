import { App } from 'vue';
import components from './components';
import i18n from './config/i18n';

export default {
	install(app: App) {
		for (const name in components) {
			app.component(name, components[name]);
		}
		app.use(i18n);
	}
};

export * from './components';
