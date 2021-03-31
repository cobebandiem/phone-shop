import {combineReducers} from 'redux';
import products from './products';
import searchProducts from './search';
import productDetail from './productDetail';
import carts from './carts';
import editingProduct from './editingProduct';
import filter from './filter';

const myReducer=combineReducers({
    products,
    searchProducts,
    productDetail,
    carts,
    editingProduct,
    filter
});
export default myReducer;