import React from "react";
import {NavLink, Redirect} from "react-router-dom";
import cartEmptyImage from '../../assets/img/empty-cart.png'
import {useSelector} from "react-redux";
const EmptyCart=()=>{

    const items=useSelector(state => state.cart.items)
    console.log('newItems:',items)
    if (Object.values(items).length){
      return  <Redirect to={'/cart'}/>
    }
    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Корзина пустая <icon>😕</icon></h2>
                    <p>
                        Вероятней всего, вы не заказывали ещё пиццу.<br/>
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>
                    <img src={cartEmptyImage} alt="Empty cart"/>
                    <NavLink to="/" className="button button--black">
                        <span>Вернуться назад</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default EmptyCart
