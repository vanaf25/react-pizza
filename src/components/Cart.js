import React, {useEffect} from "react";
import CartBottom from "./Cart/CartBottom/CartBottom";
import CartTop from "./Cart/CartTop/CartTop";
import ContentItems from "./Cart/ContentItems/ContentItems";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {removeCartItem, setEmptyCart, minusItem, plusItem, setItemsFromLocalStorage} from "../store/actions/cart";
const Cart=()=>{
    const dispatch=useDispatch();
    const clearCart=()=>{
        if (window.confirm("Вы действительно хотите очистить корзину")){
            dispatch(setEmptyCart());
        }
    }
    const onMinusItem=(key)=>{
        dispatch(minusItem(key));
    }
    const onPlusItem=(key)=>{
        dispatch(plusItem(key));
    }

    const onRemoveItem=(key)=>{
        if (window.confirm("Вы действительно хотите удалить товар?")){
            dispatch(removeCartItem(key));
        }
    }

    const {items,totalPrice,totalCount}=useSelector(({cart})=>{
        return {
           items:cart.items,
            totalPrice:cart.totalPrice,
            totalCount:cart.totalCount
        }
    });
    const newItems=useSelector(state =>state.cart.items )
    console.log('newItems:',newItems)
    const onMakeOrder=()=>{
        console.log("Ваш заказ",items)
    }
    if (!Object.values(items).length){
      return  <Redirect to={`/EmptyCart`} />
    }
    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart">
                   <CartTop clearCart={clearCart} />
                    <ContentItems minusItem={onMinusItem} plusItem={onPlusItem} removeItem={onRemoveItem} items={items}/>
                  <CartBottom onMakeOrder={onMakeOrder}  totalPrice={totalPrice} totalCount={totalCount} />
                </div>
            </div>
        </div>
    )
}
export default Cart
