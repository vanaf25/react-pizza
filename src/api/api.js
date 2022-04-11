import axios from "axios";
export const getPizzas=(category,sortBy)=>{
    return   axios.get(`pizzas?${category!==null ? `category=${category}`:''}&_sort=${sortBy.type}&_order=${sortBy.order}`);
}
export const getCategoryPizzas=(indexOfCategory)=>{
    return axios.get(`pizzas?category=${indexOfCategory}`)
}