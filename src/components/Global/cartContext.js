import { createContext, useReducer, useState } from "react";
import { CartReducer } from './cartReducer';

export const CartContext = createContext()


const CartContextProvider = (props) => {


    const [userName, setuserName] = useState('')
    const [Login, setLogin] = useState(false)

    const [cart, dispatch]= useReducer(CartReducer, {shoppingCart:[], totalPrice: 0, qty: 0, item:0,})

    return ( 
        <CartContext.Provider value={{...cart, dispatch, setuserName, userName, Login, setLogin
        }}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;