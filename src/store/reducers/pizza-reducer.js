import {getPizzas} from "../../api/api";
const set_Pizzas="set_Pizzas";
const set_Loading="set_Loading";
let initialState={
pizzas:[

],
    isLoading:true,
}
const pizzaReducer=(state=initialState,action)=>{
switch (action.type) {
    case set_Pizzas:
        return  {...state,pizzas:action.pizzas,isLoading: false}
    case set_Loading:
        return {...state,isLoading:action.loading}
    default:
        return state
}
}
export const setLoading=val=>{
    return {type:set_Loading,loading:val}
}
export const setPizzasAC=(pizzas)=>{
    return {type:set_Pizzas,pizzas}
}
export const getPizzaThunkCreator=(category,sortBy)=>dispatch=>{
 dispatch(setLoading(true));
        getPizzas(category,sortBy).then(({data})=>{
            dispatch(setPizzasAC(data));
        });
    }
export default pizzaReducer