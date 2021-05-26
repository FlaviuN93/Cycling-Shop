function setPending(state) {
	return {
		...state,
		loading: true,
	};
}

function setError(state, action) {
	return {
		...state,
		loading: false,
		error: action.payload,
	};
}

function setSuccess(state) {
	return {
		...state,
		success: true,
	};
}

const setPayload = (path) => (state, action) => {
	return {
		...state,
		loading: false,
		[path]: action.payload,
	};
};

export { setError, setPayload, setSuccess, setPending };
