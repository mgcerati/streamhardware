import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar'
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CartContainer from "./components/CartContainer";

let Main = () => {

    return(
        <div>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<ItemListContainer greeting='Bienvenidos a  StreamHardware' />}/>
                <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />}/>
                <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
                <Route exact path='/cart' element={<CartContainer/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Main