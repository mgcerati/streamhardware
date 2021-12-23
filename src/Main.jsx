import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar'
let Main = () => {
    return(
        <div>
            <NavBar/>
            <ItemListContainer greeting='Bienvenidos a  StreamHardware' />
        </div>
    )
}
export default Main