import React from 'react';
import Navbar from ''
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


function NavbarContainer(props) {
    let showMenuLink=(products)=>{
        let output=null;
        if(products.length>0){
            output=products.map((product,index)=>{
                return (<li>
                            <Link to="">Iphone</Link>
                        </li>);
            })
        }
        return output;
    }
    return (
        <Navbar>

        </Navbar>
    );
}
const mapStateToProps=(state)=>{
    return {
        products:state.products
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{

    }
}


export default connect()(NavbarContainer);