import React from 'react';
import Login from './../components/Login';
import {connect} from 'react-redux';

function LoginContainer(props) {
    return (
       <Login/>
    );
}

const mapStateToProps=(state)=>{
    return{

    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);