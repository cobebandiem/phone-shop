import callApi from '../utils/apiCaller';
import * as types from './../constants/ActionTypes';

export const actFetchProductsRequest=()=>{
    return (dispatch)=>{
        return callApi('products','GET',null).then(res=>{
            dispatch(actFetchProducts(res.data));
        })
    }
}

export const actFetchProducts=(products)=>{
    return {
        type:types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest=(id)=>{
    return (dispatch)=>{
        return callApi(`products/${id}`,'DELETE',null).then(res=>{
            console.log(res)
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct=(id)=>{
    return {
        type:types.DELETE_PRODUCT,
        id:parseInt(id)
    }
}

export const actUpdateProductRequest=(body)=>{
    console.log(body);
    return dispatch=>{
        if(body.id){
            return callApi(`products/${body.id}`,'PUT',body).then(res=>{
                dispatch(actUpdateProduct(body));
            })
        }else{
            return callApi(`products`,'POST',body).then(res=>{
                let bodyFake={
                    ...body,
                    id:parseInt(body.id)
                }
                dispatch(actAddProduct(bodyFake));
            })
        }
        
    }
}
export const actAddProduct=(body)=>{
    return{
        type:types.ADD_PRODUCT,
        body
    }
}
export const actUpdateProduct=(body)=>{
    return{
        type:types.UPDATE_PRODUCT,
        body
    }
}



export const actSearchProductRequest=(txtSearch)=>{
    return (dispatch)=>{
        return callApi(`products`,'GET',null).then(res=>{
            let data={
                txtSearch,
                products:res.data
            }
            dispatch(actSearchProduct(data));
        })
    }
}


export const actSearchProduct=(data)=>{
    return {
        type:types.SEARCH_PRODUCT,
        data
    }
}

//cart action
export const actAddCart=(product,sl)=>{
    return {
        type:types.ADD_CART,
        payload:{
            ...product,
            sl
        }
    }
}
export const actUpdateDeleteCart=(id,sl)=>{
    return dispatch=>{
        if(sl===0){
            dispatch(actDeleteCart(id))
        }else{
            dispatch(actUpdateCart(id,sl))
        }
    }
}
export const actUpdateCart=(id,sl)=>{
    return {
        type:types.UPDATE_CART,
        payload:{
            id,
            sl
        }
    }
}
export const actDeleteCart=(id)=>{
    return {
        type:types.DELETE_CART,
        id
    }
}



//get product detail
export const actGetProductDetailRequest=(id)=>{
    return dispatch=>{
        return callApi(`products/${id}`,'GET',null).then(res=>{
            dispatch(actGetProductDetail(res.data));
        })
    }
}
export const actGetProductDetail=(product)=>{
    return {
        type:types.PRODUCT_DETAIL,
        product
    }
}
export const actEditingProduct=(product)=>{
    return {
        type:types.EDITING_PRODUCT,
        product
    }
}