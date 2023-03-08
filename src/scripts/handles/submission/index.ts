import {type Preference} from '../../../popup/mods/preferences';
import {createTail, waitForFrameReady, waitForMs} from '../../utils';

const tail = createTail('handleSubmission');

async function shouldAutoFocusCaptcha() {
	const input: HTMLInputElement = document.querySelector('#txtCaptcha')!;

	if (!input) {
		tail('shouldAutoFocusCaptcha ignored; Element not found');

		return;
	}

	input.click();

	tail('shouldAutoFocusCaptcha; focused');

	input.addEventListener('input', event => {
		const target = event.target as typeof input;
		const korean = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣ';
		const english = 'rRseEfaqQtTdwWczxvgkoiOjpuPhynbml';

		let {value} = target;

		tail(value);

		for (let i = 0; i < korean.length; i++) {
			if (value.includes(korean[i])) {
				value = value.replace(korean[i], english[i]);
			}
		}

		value = value.toUpperCase();
		target.value = value;
	});

	tail('shouldAutoFocusCaptcha; korean to english adaptor installed');
}

async function shouldAutoSelectSeatTypeAs(_typeName: string) {
	for (; ;) {
		const el = document.querySelector('#divRecaptcha');

		if (el && getComputedStyle(el).display === 'none') {
			break;
		}

		await waitForMs(100);
	}

	const typeName = _typeName.trim();

	if (!typeName) {
		tail('shouldAutoSelectSeatTypeAs ignored; Not enabled');

		return;
	}

	if (!document.querySelector('.groundList')) {
		tail('shouldAutoSelectSeatTypeAs failed; Element not found');

		return;
	}

	const seatTypeLink: HTMLLinkElement = document.querySelector(`a[sgn*="${typeName}"]`)!;

	if (seatTypeLink) {
		seatTypeLink.click();
	} else {
		tail('shouldAutoSelectSeatTypeAs warn; Trying to select `일반` as given type name not found');

		let altSeatTypeLink: HTMLLinkElement = document.querySelector('a[sgn*="일반"]')!;

		if (!altSeatTypeLink) {
			tail('shouldAutoSelectSeatTypeAs warn; Trying to select any as `일반` type not found');

			altSeatTypeLink = document.querySelector('a[sgn]')!;
		}

		if (!altSeatTypeLink) {
			tail('shouldAutoSelectSeatTypeAs failed; Seat selector not found');

			return;
		}

		altSeatTypeLink.click();
	}

	tail('shouldAutoSelectSeatTypeAs; Clicked seat type');

	const nextLink: HTMLLinkElement = document.querySelector('a:has(>img[alt="좌석선택"])')!;

	if (!nextLink) {
		tail('shouldAutoSelectSeatTypeAs failed; Next link not found');

		return;
	}

	nextLink.click();
}

export async function handleSubmission(preferences: Preference) {
	if (!location.href.includes('poticket.interpark.com')) {
		tail('namespace mismatched');

		return;
	}

	if (!preferences.handles.submission.enabled) {
		tail('handle not enabled');

		return;
	}

	await waitForFrameReady(document);

	if (preferences.handles.submission.shouldAutoFocusCaptcha) {
		void shouldAutoFocusCaptcha();
	}

	void shouldAutoSelectSeatTypeAs(preferences.handles.submission.shouldAutoSelectSeatTypeAs);
}
