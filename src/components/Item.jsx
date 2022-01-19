import React from "react";
import './Item.css';
import {Link} from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <div className="card">
            <h2>{producto.name}</h2>
            <h3>Precio: {producto.price}</h3>
            <h3>Stock: {producto.stock}</h3>
            <img src={producto.img} alt={producto.name}/>
            <h4>Categoria: {producto.category}</h4>
            <Link to={`/detalle/${producto.id}`}><button>Ver detalle</button></Link>
        </div>
    )
}

export default Item