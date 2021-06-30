import { createContext, useReducer, useState } from "react";
import { CartReducer } from './cartReducer';

export const CartContext = createContext()


const CartContextProvider = (props) => {

    const [IsLogedIn, setIsLogedIn] = useState(false)

    const [cart, dispatch]= useReducer(CartReducer, {shoppingCart:[], totalPrice: 0, qty: 0, item:0})

    return ( 
        <CartContext.Provider value={{...cart, dispatch, IsLogedIn, setIsLogedIn }}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;