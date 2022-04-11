import React, {useEffect} from "react";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {getPizzaThunkCreator} from "../../store/reducers/pizza-reducer";
import LoadingPizzaBlock from "./PizzaBlock/LoadingPizzaBlock";
import {addToCart} from "../../store/actions/cart";
const ContentItems=({cartItems})=>{
    const {pizzas,isLoading,category,sortBy}=useSelector(({dataPizza,filter})=>{
        return {
            pizzas: dataPizza.pizzas,
            isLoading:dataPizza.isLoading,
            category:filter.category,
            sortBy:filter.sortBy
        }
    });
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getPizzaThunkCreator(category,sortBy));
    },[category,sortBy]);
    const onAddToCart=(obj)=>{
        dispatch(addToCart(obj))
    }
    const pizzasMap=pizzas ? pizzas.map((pizza,index)=>{
         return <PizzaBlock
             onAddToCart={onAddToCart}
             key={`${pizza.name}_${index}`}
             cartItems={cartItems}
             addedCount={cartItems[pizza.id] && cartItems[pizza.id].length}
             {...pizza}
                                                             />}
                                                          ):null;
    const loadingBocks=Array(10)
        .fill(0).map((_,index)=><LoadingPizzaBlock key={index}/>);
    return (
        <div className="content__items">
            {isLoading ? loadingBocks:pizzasMap}
        </div>
    )
}
export default ContentItems
