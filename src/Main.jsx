import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar'
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { CartContextProvider } from "./context/cartContext";
import Cart from "./components/Cart"

let Main = () => {

    return(
        <div>
            <CartContextProvider>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<ItemListContainer greeting='Bienvenidos a  StreamHardware' />}/>
                <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />}/>
                <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
                <Route exact path='/cart' element={<Cart/>}/>
            </Routes>
            </BrowserRouter>
            </CartContextProvider> 
        </div>
    )
}
export default Main