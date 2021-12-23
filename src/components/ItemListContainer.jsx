import React from "react";


const ItemListContainer = (props) => {

    const { greeting } = props

    return(
        <div>
            <h2>{greeting}</h2>
        </div>   
    )
}
export default ItemListContainer