export function get(user = {}) {
	return {
    type: 'test',
    payload: { user }
	}
};

export function list(users = []) {
	return {
    type: 'test',
    payload: { users }
	}
};
