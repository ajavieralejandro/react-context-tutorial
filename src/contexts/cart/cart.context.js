import {createContext} from 'react';
const cart = {
    hidden : true,
    toggleHidden : () =>{}
};
const CartContext = createContext(cart);

export default CartContext;