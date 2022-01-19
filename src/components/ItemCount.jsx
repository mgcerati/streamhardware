import React , { useState } from "react";
import './NavBar.css'

function ItemCount({ stock, onAdd }){
    
    const initial = 1

    const [counter, setCounter] = useState(initial)

    const handleIncrement = () => {
        counter < stock 
        ? setCounter(prev => prev + 1 ) 
        : alert("Maxima unidades alcanzada")
    };

    const handleDecrement = () => {
        counter > initial &&
        setCounter(prev => prev - 1 ) 
    };

    return(
        <div className="counter">
            <h1>Cantidad: {counter}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => onAdd(counter)}>Agregar al Carrito</button> 
            <button onClick={handleDecrement}>-</button>
        </div>      
    );
}
export default ItemCount;