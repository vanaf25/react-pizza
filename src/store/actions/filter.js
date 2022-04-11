import {Set_Sort_By,Set_Category} from "../selectors/filter";
import {getCategoryPizzas} from "../../api/api";
import {setLoading, setPizzasAC} from "../reducers/pizza-reducer";
/*export const setCategory=(currentFilter)=>{
       return dispatch=>{
           dispatch(setLoading(true));
           getCategoryPizzas(currentFilter).then(({data})=>dispatch(setPizzasAC(data)));
           dispatch(setLoading(false));
       }

}*/
export const setCategory=currentFilter=>{
    return {type:Set_Category,currentFilter}
}
export const setSortBy=({type,order})=>{
    return {type:Set_Sort_By,payload:{type,order}}
}