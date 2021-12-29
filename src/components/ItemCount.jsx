import React , { useState } from "react";
import './NavBar.css'

const ItemCount = ({min, max}) =>{ 

const [counter, setCounter] = useState(min)

const handleIncrement = () => {
    counter < max ? setCounter(prev => prev + 1 ) : alert("Maxima unidades alcanzada")
}

const handleDecrement = () => {
    counter > min ? setCounter(prev => prev - 1 ) : alert("Minimo de compra es 1")

}

    return(
        <div className="counter">
            <h1>{counter}</h1>
            <a href="#" class="btn btn-primary" button onClick={handleIncrement}>+</a>
            <a href="#" class="btn btn-primary" onClick={handleDecrement}>-</a>
        </div>      
    )
}
export default ItemCount