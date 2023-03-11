export const getUserColorFromUsername = (name: string) => {
	const hash = Array(name.length)
		.fill(0)
		.reduce((prev, _cur, index) => name.charCodeAt(index) + ((prev << 5) - prev), 0);

	const hue = hash % 360;
	const saturation = 50;
	const lightness = 50;

	return 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
};

export const convertFormKeyToLabelName = (key: string) =>
	(key.split('.').at(-1) ?? '')
		.split(/(?=[A-Z])/)
		.join(' ')
		.toLocaleLowerCase();

export const parseFile = (fileList: FileList | undefined) =>
	new Promise<string | undefined>((resolve, reject) => {
		if (!fileList) return resolve(undefined);
		const file = fileList[0];

		if (!file) return resolve(undefined);

		const reader = new FileReader();

		reader.readAsDataURL(file);

		reader.onload = () => {
			const res = reader.result;

			if (!res) return reject('failed to read file');

			if (typeof res === 'string') return resolve(res);

			return resolve(undefined);
		};

		reader.onerror = error => reject(error);
	});

export async function tryCatchHandler<Return>(
	promise: Promise<Return>,
): Promise<[Awaited<Return>, null] | [null, string]> {
	try {
		return [await promise, null];
	} catch (error) {
		console.log({ error });

		return [null, error instanceof Error ? error.message : 'Unknown error'];
	}
}
