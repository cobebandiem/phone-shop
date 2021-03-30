import React, { useEffect, useState } from 'react';
import Admin from '../components/Admin';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import AdminItem from './../components/AdminItem';

function AdminContainer(props) {
    const [products,setProducts]=useState({})
    let toString=(arrays)=>{
        let output="";
        if(arrays.length>0){
            arrays.map((item,index)=>{
                output+=item;
                if(index!==arrays.length-1){
                    output+="\n";
                }
            })
        }
        return output;
    }
    let onUpdateProduct=(product)=>{
        props.onUpdateProduct(product);
    }
    let onDeleteProduct=(id)=>{
        props.onDeleteProduct(id);
    }
    let onEditingProduct=(product)=>{
        let fakeProduct={
            ...product,
            id:parseInt(product.id),
            description:toString(product.description),
            details:toString(product.details),
            images:toString(product.images),
        }
        console.log(fakeProduct)
        props.onEditingProduct(fakeProduct);
    }
    let showListProduct=(products)=>{
        let output=null;
        if(products.length>0){
            output=products.map((product,index)=>{
                return (<AdminItem
                    onDeleteProduct={onDeleteProduct}
                    onEditingProduct={onEditingProduct}
                    key={index}
                    product={product}
                />)
            })
        }
        return output;
    }
    useEffect(()=>{
        props.fetchProducts();
    },[]);
    useEffect(()=>{
        setProducts(props.products);
    },[props.products]);
    let onSearch=(txtSearch)=>{

        let productsFake=props.products.filter((product)=>{
            return product['name'].toLowerCase().indexOf(txtSearch.toLowerCase())!==-1;
        });
        console.log(productsFake)
        setProducts(productsFake);
    }
    return (
        <Admin onUpdateProduct={onUpdateProduct} onSearch={onSearch} product={props.editingProduct}>
            {showListProduct(products)}
        </Admin>
    );
}
const mapStateToProps=state=>{
    return{
        products:state.products,
        editingProduct:state.editingProduct
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        fetchProducts:(products)=>{
            dispatch(actions.actFetchProductsRequest(products))
        },
        onDeleteProduct:(id)=>{
            dispatch(actions.actDeleteProductRequest(id))
        },
        onUpdateProduct:(product)=>{
            dispatch(actions.actUpdateProductRequest(product))
        },
        onEditingProduct:(product)=>{
            dispatch(actions.actEditingProduct(product))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AdminContainer);