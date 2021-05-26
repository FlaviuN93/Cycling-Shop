import { apiStateCreator } from 'reddeck';

function setPending(state) {
  return {
    ...state,
    api: apiStateCreator({ pending: true })
  };
}

function setError(state, action) {
  return {
    ...state,
    api: apiStateCreator({ error: action.payload })
  };
}

function setSuccess(state) {
  return {
    ...state,
    api: apiStateCreator({ success: true })
  };
}

const setState = (obj) => (state) => {
  return {
    ...state,
    ...obj
  };
};

const setPayload = (path) => (state, action) => {
  return {
    ...state,
    [path]: action.payload
  };
};

const mergePayload = (path) => (state, action) => {
  return {
    ...state,
    [path]: {
      ...state[path],
      ...action.payload
    }
  };
};

const pipe = (...actions) => (state, action) =>
  actions.reduce((v, f) => f(v, action), state);

export {
  setPending,
  setError,
  setSuccess,
  setState,
  setPayload,
  mergePayload,
  pipe
};
