import React from 'react'
import { useCartContext } from '../context/cartContext'

const Cart = () => {

    const { cartList,vaciarCarrito } = useCartContext()

    return (
        <div>
            <h1>Carrito de compra</h1>
            {cartList.map(producto =><div>{producto.name}</div>)}
            {cartList.map(producto =><div>Cantidad: {producto.counter}</div>)}
            {cartList.map(producto =><div>Precio: {producto.price}</div>)}
            <button onClick={vaciarCarrito}>Vaciar Lista de compras</button>
        </div>
    )
}

export default Cart