import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import SearchList from './../components/SearchList';
import SearchItem from './../components/SearchItem';
import Header from './../components/Header';

function HeaderContainer(props) {
    let onSearch=(txtSearch)=>{
        props.onSearch(txtSearch);
    }
    let showListSearch=(products)=>{
        let output=null;
        if(products.length>0){
            output=products.map((product,index)=>{
                return (<SearchItem key={index} product={product}/>);
            })
        }
        return output;
    }
    let totalCarts=(carts)=>{
        let output=0;
        if(carts.length>0){
            carts.map((cart,index)=>{
                output+=cart.sl; 
            })
        }
        return output;
    }
    return (
        <Header onSearch={onSearch} carts={totalCarts(props.carts)}>
            <SearchList>
                {showListSearch(props.searchProducts)}
            </SearchList>
        </Header>
    );
}
const mapStateToProps=(state)=>{
    return {
        searchProducts:state.searchProducts,
        carts:state.carts
    }
}
const mapDispatchToProps=(dispatch, props)=>{
    return{
        onSearch:(txtSearch)=>{
            dispatch(actions.actSearchProductRequest(txtSearch))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);