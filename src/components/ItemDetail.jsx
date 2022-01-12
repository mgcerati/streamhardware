import React from 'react'
import './ItemDetail.css';

const ItemDetail = ({producto}) => {
    return (
        <div className="card">
            <h2>{producto.name}</h2>
            <img src={producto.img} alt={producto.name}/>
            <h3>Precio: {producto.price}</h3>
            <h4>Descripcion: {producto.description}</h4>
        </div>
    )
}

export default ItemDetail