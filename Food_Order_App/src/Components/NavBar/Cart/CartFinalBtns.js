import styles from "./CartCss/CartFinalBtns.module.css";
import {useContext, useEffect} from "react";
import CartContext from "../../../contexts/Cart/CartContext";

const CartFinalBtns = (props) => {

    const cartCtx = useContext(CartContext);

    const closeCartModal = () => {
        props.setCartBtnClickStatus(false);
    }

    useEffect(() => {
        const handleEsc = (event) => {
            if(event.keyCode === 27){
                props.setCartBtnClickStatus(false)
            }
        }
        window.addEventListener("keydown", handleEsc);

    }, [props])

    return(
        <div className={styles["cart-action-btns"]}>
            <button
                className={styles["close-btn"]}
                onClick={closeCartModal}
            >
                Close
            </button>
            {
                cartCtx.items.length > 0 && <button className={styles["order-btn"]}>Order</button>
            }

        </div>
    )
}
export default CartFinalBtns;