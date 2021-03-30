import React, { useEffect } from 'react';
import HeaderContainer from './../containers/HeaderContainer';
import Footer from './../components/Footer';
import Navbar from './../components/Navbar';
import {Route, Switch } from 'react-router-dom';
import {routes} from './../routes';
import axios from 'axios';

function HomePage(props) {
    let showContent = (routes) => {
        let rs = null;
        if (routes.length) {
            rs = routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                );
            })
        }
        return rs;
    }
    useEffect(()=>{
        axios.get('https://api-phone-shop.herokuapp.com')
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    },[])
    return (
        <React.Fragment>
            <HeaderContainer />
            <div className="shop__body">
                <div className="container">
                    <Navbar />
                    <Switch>
                        {showContent(routes)}
                    </Switch>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default HomePage;