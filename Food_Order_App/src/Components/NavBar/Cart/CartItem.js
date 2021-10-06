import styles from "./CartCss/CartItem.module.css";
import {useContext} from "react";
import CartContext from "../../../contexts/Cart/CartContext";
import { CgTrashEmpty } from "react-icons/cg";

const CartItem = () => {

    const cartCtx = useContext(CartContext);

    return(
        <div className={styles["cart-item-wrapper"]}>
            {
                cartCtx.items.slice(0).reverse().map((item) => {
                    return(
                        <div key={item.id} className={styles["cart-item"]}>
                            <div className={styles["cart-item-data"]}>
                                <h2>{item.name}</h2>
                                <div className={styles["cart-item-data-cost"]}>
                                    <div className={styles["item-cost"]}>${item.price}</div>
                                    <div className={styles["item-quantity"]}>
                                        <span>x {item.quantity} = <div style={{color: "#8a2b06", display:"inline"}}>${(item.price * item.quantity).toFixed(2)}</div></span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["cart-item-btns"]}>
                                <div className={styles["inc-dec-btns"]}>
                                    <button
                                        className={styles["cart-item-btns-style"]}
                                        onClick={() => {
                                            cartCtx.addItem({...item, quantity: "1"})
                                        }}
                                    >
                                        +
                                    </button>

                                    <button
                                        className={styles["cart-item-btns-style"]}
                                        onClick={() => {
                                            cartCtx.removeItem(item.id)
                                        }}
                                    >
                                        -
                                    </button>
                                </div>
                                <button
                                    className={styles["delete-btn"]}
                                    onClick={() => {
                                        cartCtx.deleteItem(item.id)
                                    }}

                                >
                                    <CgTrashEmpty className={styles["delete-icon"]} />
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CartItem;