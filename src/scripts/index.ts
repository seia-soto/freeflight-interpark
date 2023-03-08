import {getPreferences} from '../popup/mods/preferences';
import {handleSubmission} from './handles/submission';
import {modLogin} from './mods/login';
import {createTail} from './utils';

(async () => {
	const tail = createTail('main');
	const preferences = await getPreferences();

	tail('preferences loaded', preferences);

	// Run mods before start as priority entries
	void modLogin(preferences);

	// Try to apply handles after modding
	void handleSubmission(preferences);
})();
