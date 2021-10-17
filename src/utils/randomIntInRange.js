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

export default randomIntInRange;
