export const waitForMs = async (ms: number) => new Promise(resolve => {
	setTimeout(() => {
		resolve(null);
	}, ms);
});

export const waitForFrameReady = async (frame: typeof document) => {
	if (frame.readyState !== 'loading') {
		return;
	}

	return new Promise(resolve => {
		frame.addEventListener('readystatechange', () => {
			resolve(null);
		});
	});
};

export const createTail = (ns: string) => new Proxy(console.log, {
	apply(target, thisArg, argArray: unknown[]) {
		Reflect.apply(target, thisArg, [`[FreeFlight ${ns}]`, ...argArray]);
	},
});
