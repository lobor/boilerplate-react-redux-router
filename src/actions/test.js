export function get(title) {
	return function (dispatch) {
		new Promise((resolve) => {
			dispatch( {
		    type: 'test',
		    title: title || 'hello'
		  })
		})
	}
};
