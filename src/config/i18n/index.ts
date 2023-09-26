import { createI18n } from 'vue-i18n';
import en from './languages/en.json';
import fr from './languages/fr.json';

export default createI18n({
	legacy: false,
	messages: {
		en,
		fr
	}
});
