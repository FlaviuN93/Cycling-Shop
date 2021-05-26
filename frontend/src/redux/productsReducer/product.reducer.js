import { setError, setPayload, setPending } from '../../utils/actionHandlers';
import { createReducer } from 'reduxsauce';
import productTypes from './product.types';

const INITIAL_STATE = {
	products: [],
};

const actionHandlers = {
	[productTypes.GET_PRODUCT_REQUEST]: setPending,
	[productTypes.GET_PRODUCT_DETAILS]: setPayload('products'),
	[productTypes.GET_PRODUCT_FAIL]: setError,
};

const productReducer = createReducer(INITIAL_STATE, actionHandlers);
export default productReducer;
