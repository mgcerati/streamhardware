import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { traerProductos } from "../products.jsx";
import ItemList from "./ItemList";


const ItemListContainer = (props) => {

    const { greeting } = props;

    const [data, setData] = useState([]);

    const{categoriaId} = useParams()

    useEffect(() => {
        if(categoriaId){
            traerProductos.then((res)=> {
                setData(res.filter(prod => prod.category === categoriaId));
            })
            .catch((error) => {
                console.error(error)
            })
        } else {
            traerProductos.then((res)=> {
                setData(res);
            })
            .catch((error) => {
                console.error(error)
            })
        }
        
    }, [categoriaId]);
    
    

    return(
        <div>
            <h2>{greeting}</h2>
            <ItemList productos={data}/>
        </div>  
    )
}
export default ItemListContainer