const createSelectors = (store) => {
	let newStore = {
		use: {},
	};

	for (let key of Object.keys(store.getState())) {
		newStore.use[key] = store((s) => s[key]);
	}

	return newStore;
};

export default createSelectors;
