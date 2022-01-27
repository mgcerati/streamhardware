import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { traerProductos } from "../products.jsx";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where }from 'firebase/firestore'


const ItemListContainer = (props) => {

    const { greeting } = props;

    const [data, setData] = useState([]);

    const{categoriaId} = useParams()

    useEffect(() => {
        //if(categoriaId){
        //traerProductos.then((res)=> {
        //        setData(res.filter(prod => prod.category === categoriaId));
        //    })
        //    .catch((error) => {
        //        console.error(error)
        //    })
        //} else {
        //    traerProductos.then((res)=> {
        //        setData(res);
        //    })
        //    .catch((error) => {
        //        console.error(error)
        //    })
        //}

        const db = getFirestore()
        
        const queryCollection = categoriaId?
                                        query(collection(db, 'products'), where('category', '==' ,categoriaId))
                                        :
                                        query(collection(db, 'products'))

        getDocs(queryCollection)
        .then(res => setData(res.docs.map(prod => ({ id: prod.id,  ...prod.data()}))))
        .catch(err => err)
        .finally()
        
    }, [categoriaId]);
    
    

    return(
        <div>
            <h2>{greeting}</h2>
            <ItemList productos={data}/>
        </div>  
    )
}
export default ItemListContainer