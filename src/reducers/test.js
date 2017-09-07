var initialState = {
	title: 'Home salut',
	toto: ''
};

export default function selectedSubreddit(state = initialState, { type, payload }) {
  switch (type) {
    case 'test':
      return Object.assign(state, { title: payload.title });
    default:
      return state
  }
}
