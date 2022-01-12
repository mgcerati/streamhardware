import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar'
import ItemCount from './components/ItemCount'
import ItemDetailContainer from "./components/ItemDetailContainer";
let Main = () => {

    return(
        <div>
            <NavBar/>
            <ItemListContainer greeting='Bienvenidos a  StreamHardware' />
            {/* <ItemCount min={0} max={10}></ItemCount>*/}
            <ItemDetailContainer/>
        </div>
    )
}
export default Main