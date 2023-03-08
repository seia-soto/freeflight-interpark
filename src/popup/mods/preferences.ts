import browser from 'webextension-polyfill';

export type Preference = {
	version: string;
	mods: {
		autoLogin: {
			enabled: boolean;
		};
	};
	handles: {
		submission: {
			enabled: boolean;
			shouldAutoFocusCaptcha: boolean;
			shouldAutoSelectSeatTypeAs: string;
		};
	};
};

export const emptyPreferences: Preference = {
	version: '20230308-d',
	mods: {
		autoLogin: {
			enabled: false,
		},
	},
	handles: {
		submission: {
			enabled: true,
			shouldAutoFocusCaptcha: true,
			shouldAutoSelectSeatTypeAs: '',
		},
	},
};

export async function getPreferences() {
	const source = await browser.storage.local.get('preferences') as {preferences: Preference};

	if (!source.preferences || source.preferences.version !== emptyPreferences.version) {
		await browser.storage.local.set({
			preferences: emptyPreferences,
		});

		return emptyPreferences;
	}

	return source.preferences;
}

export async function setPreferences(preferences: Preference) {
	await browser.storage.local.set({
		preferences,
	});
}
