import { App } from 'vue';
import VLink from './VLink.vue';

export default {
	install(app: App) {
		app.component('VLink', VLink);
	}
};

export { VLink };
