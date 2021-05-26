import { combineReducers } from 'redux';
import productReducer from './productsReducer/product.reducer';

const reducer = combineReducers({
	productList: productReducer,
});

export default reducer;
