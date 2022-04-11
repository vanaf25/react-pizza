import React, {useState} from "react";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import {useDispatch, useSelector} from "react-redux";
const categoryNames=["Мясные","Вегетарианская","Гриль","Острые","Закрытые"];
const sortItems=[
    {name:"популярности", type:"rating",order:"desc"},
    {name:"цене", type:"price",order:"desc"},
    {name:"алфавиту", type:"name",order:"asc"}
]
const ContentTop=({setCategory,setSortBy,getPizza})=>{
    const dispatch=useDispatch();
    const {category,sortBy}=useSelector(({filter})=>{
     return {
         category:filter.category,
         sortBy:filter.sortBy,
     }
    });
    const onSelectCategory=React.useCallback((index)=>{
        dispatch(setCategory(index));
    },[]);
    return (
        <div className="content__top">
            <Categories currentCategory={category}  getPizza={getPizza} onSelectCategory={onSelectCategory}
                         items={categoryNames} />
           <Sort activeSortType={sortBy.type} setSortBy={setSortBy} items={sortItems}/>
        </div>
    )
}
export default ContentTop