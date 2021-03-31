import { Link } from "react-router-dom";

function ProductItem(props) {
    return (
        <div className="col c-2-5">
            <Link to={`dien-thoai/${props.product.id}`} className="home-product-item">
                <div className="home-product-item__img" style={{
                    backgroundImage:"url('https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max_1__7.jpg')",
                }}>
                </div>
                <h4 className="home-product-item__name">Samsung Galaxy S21 Plus 128GB 5G - Chính hãng</h4>
                <div className="home-product-item__price">
                    <span className="home-product-item__price-current">25,990,000 ₫</span>
                    <span className="home-product-item__price-old">16,960,000 ₫</span>
                </div>
                <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-present">-12%</span>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;
