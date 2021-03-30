import * as types from '../constants/ActionTypes';
var initialState=[];

var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.SEARCH_PRODUCT:{
            let {products,txtSearch}=action.data;
            if(!txtSearch.trim()){
                console.log([]);
                return [];
            }
            products=products.filter((product)=>{
                return product.name.indexOf(txtSearch.trim())!==-1;
            });
            console.log(products);
            return products;
        }
        default:{
            return [...state];
        }
    }
}
export default myReducer;

