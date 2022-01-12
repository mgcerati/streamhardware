import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { traerProductos } from '../products'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [producto,setproducto] = useState({})

    useEffect(()=> {
        traerProductos
        .then(resp => setproducto(resp.find( prod => prod.id === '1')))
    }, [])
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer