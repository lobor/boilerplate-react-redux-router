export function get(id) {
	return {
    type: 'GET_USER',
    payload: { id }
	}
};

export function list() {
	return {
    type: 'LIST_USER'
	}
};
