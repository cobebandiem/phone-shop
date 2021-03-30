function Navbar() {
    return (
        <ul className="shop__nav__menu">
            <li>
                <a href="">
                    <i className="fas fa-mobile-alt"></i>
                    <span>ĐIỆN THOẠI</span>
                </a>
                <div className="catalog">
                    <h4>HÃNG SẢN XUẤT</h4>
                    <ul className="list__product">
                        <li>
                            <a href="">Iphone</a>
                        </li>
                        <li>
                            <a href="">OPPO</a>
                        </li>
                        <li>
                            <a href="">Vsmart</a>
                        </li>
                        <li>
                            <a href="">Samsung</a>
                        </li>
                        <li>
                            <a href="">Nokia</a>
                        </li>
                        <li>
                            <a href="">Realme</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-tablet-alt"></i>
                    <span>TABLET</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-headphones-alt"></i>
                    <span>LOA - TAI NGHE</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-charging-station"></i>
                    <span>PHỤ KIỆN</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-sim-card"></i>
                    <span>SIM THẺ</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="far fa-newspaper"></i>
                    <span>TIN TỨC</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-ad"></i>
                    <span>KHUYẾN MÃI</span>
                </a>
            </li>
        </ul>

    );
}

export default Navbar;
