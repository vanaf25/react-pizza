import {Set_Sort_By} from "../selectors/filter";
import {Set_Category} from "../selectors/filter";
const initialState={
   category:null,
    sortBy:{
       type:"rating",
        order:'desc',
    }
}
const filterReducer=(state=initialState,action)=>{
    switch (action.type) {
        case Set_Category:
            return {...state,category:action.currentFilter}
        case   Set_Sort_By:
           return  {...state,sortBy: action.payload}
        default:
            return state
    }
}
export default filterReducer