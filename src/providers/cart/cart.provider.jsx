import React, { createContext,useState,useEffect } from 'react';
import {addItemToCart, removeItemFromCart,filterItemFromCart,getCartItemsCount,selectTotal} from "./cart.utils";

export const CartContext = createContext({
    hidden : true,
    toggleHidden: () => {},
    cartItems : [],
    addItem : () => {},
    removeItem : () => {},
    clearItemFromCart: () =>{},
    cartsItemsCount : 0,
    total : 0
});


const CartProvider = ({children}) => {

    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [total, setTotal] = useState(0);
    const addItem = item => setCartItems(addItemToCart(cartItems,item));
    const toggleHidden = () => setHidden(!hidden);
    const removeItem = item => setCartItems(removeItemFromCart(cartItems,item));
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems,item));
    

    useEffect(()=>{
        setCartItemsCount(getCartItemsCount(cartItems));
        setTotal(selectTotal(cartItems));
    },[cartItems])

    
    return (<CartContext.Provider
        value={{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            cartItemsCount,
            clearItemFromCart,
            total
        }
        }
    >
    {children}</CartContext.Provider>);
}

export default CartProvider;