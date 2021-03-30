import React from 'react';
import {Link} from 'react-router-dom';

function SearchList(props) {
    const {id,name,price,image}=props.product;
    return (
        <li className="header__search__item">
            <Link to={`/${id}`}>
                <div className="item__img">
                    <img src="https://hoanghamobile.com/productlist/dst/Uploads/2021/02/25/iphon12.png" alt="" />
                </div>
                <div className="item__content">
                    <h4>{name}</h4>
                    <span className="item__content--price">{price} ₫</span>
                </div>
            </Link>
        </li>
    );
}

export default SearchList;