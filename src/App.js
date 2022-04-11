import React, {useEffect} from "react";
import './App.css';
import Main from "./components/Main";
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import Cart from "./components/Cart";
import EmptyCart from "./components/EmptyCart/EmptyCart";
import NotFound from "./components/NotFound/NotFound";
import {setItemsFromLocalStorage} from "./store/actions/cart";
import {useDispatch} from "react-redux";
const App =()=> {
    const dispatch=useDispatch();
    useEffect(()=>{
        if (localStorage.getItem('cart')){
            dispatch(setItemsFromLocalStorage(JSON.parse(localStorage.getItem('cart'))))
        }
    },[])
        return (
         <div  className={"wrapper"}>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={()=><Main/>}/>
                <Route exact path={'/cart'} component={()=><Cart/>}/>
                <Route exact path={'/emptyCart'} component={()=><EmptyCart/>}/>
                <Route exact path="*" component={()=><NotFound/>}/>
            </Switch>

         </div>
        );
}
export default App
