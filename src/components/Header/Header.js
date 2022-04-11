import React from "react";
import Cart from "./Cart/Cart";
import Logo from "./Logo/Logo";
import {useSelector} from "react-redux";
const Header=()=>{
    const {totalPrice,totalCount}=useSelector(({cart})=>{
        return{
            totalPrice:cart.totalPrice,
            totalCount:cart.totalCount,
        }
    });
    return (
        <div className="header">
            <div className="container">
            <Logo/>
               <Cart totalPrice={totalPrice} totalCount={totalCount} />
            </div>
        </div>
    )
}
export default Header