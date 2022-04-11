import React from "react";
import CartItem from "./CartItem/CartItem";
const ContentItems=({items,removeItem,plusItem,minusItem,onMakeItems})=>{
  const keys=Object.keys(items);
 const cartPizzas=keys.map(key=>{
     return items[key];
 });
console.log(cartPizzas);
 const cartPizzasMap=cartPizzas.map((item,index)=>{
     const elem=item.items[0];
     const key=`${elem.id}${elem.type}${elem.size}_${index}`
     return <CartItem onMakeItems={onMakeItems} plusItem={plusItem} minusItem={minusItem} on id={`${elem.id}${elem.type}${elem.size}`} removeItem={removeItem} imageUrl={elem.imageUrl} count={item.items.length}
                      name={elem.name} size={elem.size}
                      cost={item.totalPrice} type={elem.type}
                      key={key}
     />
 });
    return (
        <div className="content__items">
            {cartPizzasMap}
        </div>
    )
}
export default ContentItems