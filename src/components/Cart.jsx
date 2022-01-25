import React from 'react'
import { useCartContext } from '../context/cartContext'


const Cart = () => {

    const { cartList,vaciarCarrito, eliminarProducto } = useCartContext()

    return (
        <>
        <div>
            <h1>Carrito de compra</h1>
            <div>
                {cartList.map((producto) =>(
                    <div key={producto.id}>
                        <div>{producto.name}</div>
                        <div>Cantidad: {producto.counter}</div>
                        <div>Precio: {producto.price}</div>
                        <button onClick={()=>eliminarProducto(producto.id)}>Eliminar Producto</button>
                    </div>
                ))} 
            </div>
            <br />
            <button onClick={vaciarCarrito}>Vaciar Lista de compras</button>
        </div>
        </>
        
    )
}    
export default Cart