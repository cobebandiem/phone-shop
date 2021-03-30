import ProductItem from './ProductItem';

function ProductList(props) {
    return (
        <div className="shop__list">
            <div className="title">
                <h4>ĐIỆN THOẠI NỔI BẬT</h4>
            </div>
            <div className="list__items grid row">
                {props.children}
            </div>
        </div>
    );
}

export default ProductList;
