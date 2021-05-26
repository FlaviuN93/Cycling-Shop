import { apiStateCreator } from 'reddeck';
import { createReducer } from 'reduxsauce';

import { indexByKeyInObj } from '../../utils/array-helper';
import appTypes from '../app/types';
import userTypes from '../user/types';
import { setError, setPayload, setPending } from '../utils/action-handlers';
import types from './types';

export const initialState = {
  all: {
    // All addresses, indexed by country code
    AE: [],
    KW: []
  },
  api: apiStateCreator()
};

function getSuccess(state, action) {
  const { addresses } = action.payload;
  if (!Array.isArray(addresses)) {
    return {
      ...state,
      api: apiStateCreator({ success: true })
    };
  }

  return {
    ...state,
    all: indexByKeyInObj(addresses, 'country_code'),
    api: apiStateCreator({ success: true })
  };
}

function removeAddress(state, action) {
  const { id, countryCode } = action.payload;
  const addresses = state.all[countryCode].filter((i) => i.id !== id);
  return {
    ...state,
    all: {
      ...state.all,
      [countryCode]: addresses
    },
    api: apiStateCreator({ success: true })
  };
}

const actionHandlers = {
  [types.GET]: setPending,
  [types.GET_ERROR]: setError,
  [types.GET_SUCCESS]: getSuccess,

  [types.CREATE]: setPending,
  [types.CREATE_ERROR]: setError,
  [types.CREATE_SUCCESS]: getSuccess,

  [types.UPDATE]: setPending,
  [types.UPDATE_ERROR]: setError,
  [types.UPDATE_SUCCESS]: getSuccess,

  [types.REMOVE]: setPending,
  [types.REMOVE_ERROR]: setError,
  [types.REMOVE_SUCCESS]: removeAddress,

  [types.ADD_CONTACT_INFORMATION]: setPayload('contactInformation'),

  [userTypes.GET_SUCCESS]: getSuccess,

  [appTypes.RESET]: () => initialState
};

export default createReducer(initialState, actionHandlers);
