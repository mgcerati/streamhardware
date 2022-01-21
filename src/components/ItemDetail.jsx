import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from '../context/cartContext'
import './ItemDetail.css';

const ItemDetail = ({producto}) => {

    const { cartList, agregarAlCarrito } = useCartContext()

    const [show, setShow] = useState(true)

    const onAdd = (counter) => {
        setShow(false)
        agregarAlCarrito( {...producto,counter: counter} )
    }

    return (
        <div className="card">
            <h2>{producto.name}</h2>
            <img src={producto.img} alt={producto.name}/>
            <h3>Precio: {producto.price}</h3>
            <h4>Descripcion: {producto.description}</h4>
            {show ? <ItemCount stock={producto.stock} onAdd={onAdd}/> : 
            
            <div>
                <Link to='/cart'><button>Ir al carrito</button></Link>
                <Link to='/'><button>Seguir comprando</button></Link>
            </div>}
            
        </div>
    )
}

export default ItemDetail