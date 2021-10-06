import styles from "./CartCss/CartTotal.module.css";
import {useContext} from "react";
import CartContext from "../../../contexts/Cart/CartContext";

const CartTotal = () => {

    const cartCtx = useContext(CartContext)

    return(
        <div className={styles["cart-total"]}>

            {
                cartCtx.items.length > 0 ? (
                    <>
                        <h3>Total Price</h3>
                        <span>${cartCtx.totalPrice.toFixed(2)}</span>
                    </>
                ) : (
                    <></>
                )
            }


        </div>
    )
}

export default CartTotal;