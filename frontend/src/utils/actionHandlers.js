import reddeck, { apiStateCreator } from 'reddeck';

function setPending(state) {
	return {
		...state,
		api: apiStateCreator({ pending: true }),
	};
}

function setError(state, action) {
	return {
		...state,
		api: apiStateCreator({ error: action.payload }),
	};
}
