var initialState = { title: 'Home salut', toto: '' };

export default function selectedSubreddit(state = initialState, { type, title }) {
  switch (type) {
    case 'test':
      return Object.assign(state, { title });
    default:
      return state
  }
}
