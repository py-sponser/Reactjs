import styles from "./CartCss/BackDrop.module.css"
import CartContent from "./CartContent";
import ReactDOM from "react-dom";

const BackDrop = (props) => {

    const closeCartModal = () => {
        props.setCartBtnClickStatus(false);
    }

    return(
        <div className={styles["back-drop"]} onClick={closeCartModal}>

        </div>
    )
}

const CartModal = (props) => {
    return(
        <CartContent setCartBtnClickStatus={props.setCartBtnClickStatus} cartBtnClickStatus={props.cartBtnClickStatus} />
    )
}

const Cart = (props) => {
    return (
        <div>
            {
                ReactDOM.createPortal(
                    <BackDrop setCartBtnClickStatus={props.setCartBtnClickStatus} cartBtnClickStatus={props.cartBtnClickStatus} />,
                    document.getElementById("cart-modal-backdrop")
                )
            }
            {
                ReactDOM.createPortal(
                    <CartModal setCartBtnClickStatus={props.setCartBtnClickStatus} cartBtnClickStatus={props.cartBtnClickStatus} />,
                    document.getElementById("cart-modal")
                )
            }
        </div>
    )
}

export default Cart;