import {FaShoppingCart} from "react-icons/fa";
import cartBtnStyles from "./NavCss/CartBtn.module.css"
import Cart from "./Cart/Cart";
import {useContext, useState} from "react";
import CartContext from "../../contexts/Cart/CartContext";

const CartBtn = (props) => {

    const cartCtx = useContext(CartContext);


    const [cartBtnClickStatus, setCartBtnClickStatus] = useState(false);

    const onCartBtnClick = () => {
        setCartBtnClickStatus(true);
    }

    const cartDisabled = cartCtx.items.length > 0;



    return (
        <>
            { cartBtnClickStatus && <Cart cartBtnClickStatus={cartBtnClickStatus} setCartBtnClickStatus={setCartBtnClickStatus} /> }
            <button className={cartBtnStyles.cartBtn} onClick={onCartBtnClick} disabled={!cartDisabled} title={`${!cartDisabled ? "Cart works when items get added.": ""}`}>
                <span className={cartBtnStyles.cartIconWrapper}>
                    <FaShoppingCart className={cartBtnStyles.cartIcon} />
                </span>
                <span className={cartBtnStyles.cartBtnBadge}>
                    {
                        cartCtx.items.length
                    }
                </span>
            </button>
        </>
    )
}

export default CartBtn;