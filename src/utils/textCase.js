const randomIntInRange = (min, max = undefined, exclude = undefined) => {
	if (!exclude) {
		if (!max) return Math.floor(Math.random() * (min + 1));

		if (min > max) {
			[min, max] = [max, min];
		}

		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	let randomValue;
	do {
		if (min > max) {
			[min, max] = [max, min];
		}

		randomValue = Math.floor(Math.random() * (max - min + 1) + min);
	} while (randomValue === exclude);

	return randomValue;
};

const toTitleCase = (phrase, separator = ' ') =>
	phrase
		.toLowerCase()
		.split(separator)
		.map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
		.join(separator);

const toCamelCase = (phrase, separator = ' ') =>
	phrase
		.toLowerCase()
		.split(separator)
		.map((word, idx) => {
			if (!idx) return `${word.charAt(0).toLowerCase()}${word.slice(1)}`;

			return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
		})
		.join('');

const toPascalCase = (phrase, separator = ' ') =>
	phrase
		.toLowerCase()
		.split(separator)
		.map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
		.join('');

const toLowerCase = (phrase) => phrase.toLowerCase();

const toUpperCase = (phrase) => phrase.toUpperCase();

const toSentenceCase = (phrase) => `${phrase.charAt(0).toUpperCase()}${phrase.toLowerCase().slice(1)}`;

const toToggleCase = (phrase, separator = ' ') =>
	phrase
		.toLowerCase()
		.split(separator)
		.map((word) => {
			const { length } = word;
			const qty = randomIntInRange(length - 1);
			let count = 0;
			const indexList = [];
			let idxRef;

			while (count !== qty) {
				const idx = randomIntInRange(0, length - 1, idxRef);
				indexList.push(idx);
				idxRef = idx;

				count++;
			}

			if (!indexList.length) return word.toLowerCase();

			let toggleWord = word;
			indexList.forEach((idx) => {
				toggleWord = toggleWord.replace(word[idx], word[idx].toUpperCase());
			});

			return toggleWord;
		})
		.join(separator);

export { toTitleCase, toCamelCase, toPascalCase, toLowerCase, toUpperCase, toSentenceCase, toToggleCase };
