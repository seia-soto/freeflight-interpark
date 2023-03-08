export const debounceThreshold = 400;

export const debounce = <A extends (...args: unknown[]) => unknown>(fn: A) => {
	let timer: ReturnType<typeof setTimeout> | false;

	function wrap(...args: unknown[]) {
		const context = wrap as A;

		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			timer = false;

			fn.apply(context, args);
		}, debounceThreshold);
	}

	return wrap;
};
