import productTypes from './product.types';
import axios from 'axios';

export const getProductList = () => async (dispatch) => {
	try {
		dispatch({ type: productTypes.GET_PRODUCT_REQUEST });
		const { data } = await axios.get('/api/products');
		dispatch({ type: productTypes.GET_PRODUCT_DETAILS, payload: data });
	} catch (err) {
		const error =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch({ type: productTypes.GET_PRODUCT_FAIL, payload: error });
	}
};
