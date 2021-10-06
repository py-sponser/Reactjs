import React from "react";

const CartContext = React.createContext({
    items: [],
    totalPrice: "",
    addItem: (item) => {},
    removeItem: (itemId) => {},
    deleteItem: (itemId) => {},
})

export default CartContext;