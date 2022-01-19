import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { traerProductos } from '../products'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [producto,setproducto] = useState({})

    const { detalleId } = useParams()

    useEffect(()=> {
        traerProductos
        .then(resp => setproducto(resp.find( prod => prod.id === detalleId)))
    }, [detalleId])
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer