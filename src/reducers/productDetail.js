import * as types from '../constants/ActionTypes';
var initialState = {};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PRODUCT_DETAIL: {
            console.log(action);
            return action.product;
        }
        default: {
            return { ...state };
        }
    }
}
export default myReducer;

