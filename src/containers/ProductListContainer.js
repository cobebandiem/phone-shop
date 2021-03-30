import React from 'react';
import {connect} from 'react-redux';
import ProductList from './../components/ProductList';
import ProductItem from './../components/ProductItem';
import Slider from './../components/Slider';
import * as actions from './../actions/index';
class ProductListContainer extends React.Component {
    showProductList=(products)=>{
        let output=null;
        if(products.length>0){
            output=products.map((product,index)=>{
                return (<ProductItem 
                    key={index}
                    product={product}
                />)
            })
        }
        return output;
    }
    componentDidMount(){
        this.props.fetchProducts();
    }
    render(){  
        return (
            <React.Fragment>
                <Slider/>
                <ProductList>
                    {this.showProductList(this.props.products)}
                </ProductList>
            </React.Fragment>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        products:state.products
    }
}
const mapDispatchToProps=(dispatch, props)=>{
    return{
        fetchProducts:(products)=>{
            dispatch(actions.actFetchProductsRequest(products))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListContainer);