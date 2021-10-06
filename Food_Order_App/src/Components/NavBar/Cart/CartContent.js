import Card from "../../UI/Card";
import styles from "./CartCss/CartContent.module.css"
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import CartFinalBtns from "./CartFinalBtns";

const CartContent = (props) => {
    return(
        <Card className={styles["cart-modal"]}>
            <div className={styles["modal-content"]}>
                <CartItem />
                <CartTotal />
                <CartFinalBtns setCartBtnClickStatus={props.setCartBtnClickStatus} />

            </div>
        </Card>
    )
}

export default CartContent;