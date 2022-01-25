import { useState, useContext } from "react";
import { createContext} from "react";


const CartContext = createContext([])

export function useCartContext() {
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items) {

        const index = cartList.findIndex(i => i.id === items.id)

        if(index > -1 ){
            const cantAnt = cartList[index].counter
            let cantNueva = cantAnt + items.counter
            cartList[index].counter=cantNueva
            let newArray = [...cartList]
            setCartList(newArray)
        }else{
            setCartList([...cartList,items])
        }
        
    }
    function vaciarCarrito() {
        setCartList([])
    }

    const eliminarProducto = (id) =>{
        const itemEliminado = cartList.filter((producto)=> producto.id !==id)
        setCartList(itemEliminado);
    }

    return(

        <CartContext.Provider value={{
            cartList, 
            agregarAlCarrito,
            vaciarCarrito,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    
    )
        
}