var initialState = {
	users: [
		{
			id: 1,
			lastName: 'Dupond',
			firstName: 'Lionel'
		},
		{
			id: 2,
			lastName: 'Tralfalgar',
			firstName: 'Nami'
		}
	],
	user: {}
};

export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case 'LIST_USER':
      return state;
		case 'GET_USER':
			var user;
			state.users.forEach(function (el) {
				if (el.id === payload.id){
					user = el
				}
			})
      return Object.assign(state, { user: user });
    default:
      return state
  }
}
