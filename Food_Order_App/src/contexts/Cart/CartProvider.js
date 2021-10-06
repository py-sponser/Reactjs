import CartContext from "./CartContext";
import {useReducer} from "react";



const cartReducer = (cartPrevState, action) => {

    const getTotalCost = (items) => {
        return items.reduce((initVal, item) => {
            return initVal + (item.price * item.quantity);
        }, 0)
    }


    if(action.id === "AddItem"){
        let updatedItems;

        // if there are already items in the cart.
        if(cartPrevState.items.length > 0){
            let incQuantityMode = false; // boolean handler to indicate whether we are incrementing quantity or adding item.
            updatedItems = cartPrevState.items.map((item) => {
                // if we are adding an item that is already exist in the cart
                if(action.item.id === item.id){
                    item.quantity = +item.quantity + +action.item.quantity;
                    incQuantityMode = true;
                    // just increment the item quantity by the quantity we requested to add.
                    return item;
                }
                return item; // return item as it is.
            })
            // if we are adding an item that isn't already exist in the cart.
            // just add it
            if(incQuantityMode === false){
                // if we are not incrementing quantity, add the item as new one.
                updatedItems = [...cartPrevState.items, action.item]
            }
            else{
                // save quantity changes.
                updatedItems = [...updatedItems]
            }

        }
        else{
            // if we are adding an item while cart is empty, add it.
            updatedItems = [...cartPrevState.items, action.item];

        }

        const updatedCost = getTotalCost(updatedItems)

        return {items: updatedItems, totalPrice: updatedCost}

    }
    else if(action.id === "RemoveItem"){

        let updatedItems;
        updatedItems = cartPrevState.items.map((item) => {
            if(item.id === action.itemId){
                if(item.quantity >= 1){
                    item.quantity = +item.quantity - 1
                    return item;
                }


            }
            return item;
        })

        // return items which their quantity != 0
        updatedItems = updatedItems.filter((item) => {
            return item.quantity !== 0;
        })

        const updatedCost = getTotalCost(updatedItems);
        return {items: updatedItems, totalPrice: updatedCost}

    }

    else if(action.id === "deleteItem"){
        let updatedItems;
        updatedItems = cartPrevState.items.filter((item) => {
            return item.id !== action.itemId;
        })

        const updatedCost = getTotalCost(updatedItems);
        return {items: updatedItems, totalPrice: updatedCost}
    }
}



const CartProvider = (props) => {

    const [cartItems, cartDispatcher] = useReducer(cartReducer, {
        items: [],
        totalPrice: "",
    })

    const cartItemAddHandler = (item) => {
        console.log(item);
        cartDispatcher({id: "AddItem", item: item})

    }

    const cartRemoveItemHandler = (itemId) => {
        cartDispatcher({id: "RemoveItem", itemId: itemId})

    }

    const cartDeleteItemHandler = (itemId) => {
        cartDispatcher({id: "deleteItem", itemId: itemId})
    }



    const cartContext = {
        items: [...cartItems.items],
        totalPrice: cartItems.totalPrice,
        addItem: cartItemAddHandler,
        removeItem: cartRemoveItemHandler,
        deleteItem: cartDeleteItemHandler,
    }


    return(
        <CartContext.Provider
            value={cartContext}
        >
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;