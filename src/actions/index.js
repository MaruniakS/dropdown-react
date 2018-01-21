export const selectCountry = (index, id) => {
	return {
			type: 'SELECT_COUNTRY',
			index,
			id
	}
};
