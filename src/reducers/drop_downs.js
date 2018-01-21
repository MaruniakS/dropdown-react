const dropDowns = (state = [], action) => {
		switch (action.type) {
				case 'SELECT_COUNTRY':
						return state.map((item, index) =>
								(index === action.index)
										? {...item, selectedCountryId: action.id}
										: item);
				default:
						return state;
		}
};

export default dropDowns;
