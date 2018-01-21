const dropDowns = (state = [], action) => {
		switch (action.type) {
				case 'SELECT_COUNTRY':
						return [
								...state,
								{
										id: action.id,
										text: action.text,
										completed: false
								}
						];
				default:
						return state
		}
};

export default dropDowns;