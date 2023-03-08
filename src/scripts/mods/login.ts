import {type Preference} from '../../popup/mods/preferences';
import {createTail} from '../utils';

const tail = createTail('autoLogin');

export async function modLogin(preferences: Preference) {
	if (!preferences.mods.autoLogin.enabled) {
		tail('mod is not enabled');

		return;
	}

	if (location.href.includes('TPLogin.asp')) {
		tail('already in login page');

		return;
	}

	const loginButton: HTMLLinkElement = document.querySelector('#logstatus > a[href*="TPLogin.asp"]')!;

	loginButton?.click();

	tail('requested to login if available');
}
