import React, { useState, useEffect } from "react";
import { traerProductos } from "../products.jsx";
import ItemList from "./ItemList";


const ItemListContainer = (props) => {

    const { greeting } = props;

    const [data, setData] = useState([]);

    useEffect(() => {
        traerProductos.then((res)=> {
        setData(res);
    })
    .catch((error) => {
        console.error(error)
    })
    }, []);
    
    

    return(
        <div>
            <h2>{greeting}</h2>
            <ItemList productos={data}/>
        </div>  
    )
}
export default ItemListContainer