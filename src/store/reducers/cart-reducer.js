import {
    ADD_TO_CART,
    MINUS_ITEM, PLUS_ITEM,
    REMOVE_CART_ITEM,
    SET_EMPTY_CART,
    SET_TOTAL_COUNT,
    SET_TOTAL_SIZE, SET_TYPE_FROM_LOCALSTORAGE
} from "../selectors/cart";

const initialState={
items:{

},
    totalPrice:0,
    totalCount:0,
}
const _get=(obj,path)=>{
    const [firstKey,...keys]=path.split('.');
   return  keys.reduce((val,key)=>{
        return val[key]
    },obj[firstKey])
}
const totalSum=(obj,path)=> {
    return Object.values(obj)
        .reduce((sum, obj) => {
            const value=_get(obj,path);
            return sum+value
        },0);
}
const getTotalPrice=(arr)=>{
  return arr.reduce((sum,obj)=>obj.price+sum,0);
}
const setItemsToLocalStorage=(items)=>{
    localStorage.setItem('cart',JSON.stringify(items))
}
const cartReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const key=`${action.payload.id}${action.payload.type}${action.payload.size}`;
            const currentPizzaItems=!state.items[key] ? [action.payload]:
                [...state.items[key].items, action.payload]
            const newItems={
                ...state.items,
                [key]:{
                    items:currentPizzaItems,
                    totalPrice:getTotalPrice(currentPizzaItems),
                }
            }

        /*    const items=Object.values(newItems).map(obj=>obj.items);*/
    /*        const allPizzas=[].concat.apply([], items);*/
           const totalPrice=totalSum(newItems,'totalPrice');
           const totalCount=totalSum(newItems,'items.length');
            setItemsToLocalStorage({items:newItems,totalCount,totalPrice})
            return {...state,
                items:newItems,
                totalCount,
                totalPrice,
            }
        case SET_TOTAL_COUNT:
            return {...state,totalPrice: action.payload}
        case SET_TOTAL_SIZE:
            return {...state,totalCount: action.payload}
        case SET_EMPTY_CART:
            setItemsToLocalStorage({},0,0)
            return {...state,items:{},totalPrice: 0,totalCount: 0}
        case REMOVE_CART_ITEM:
            const copiedItems={
                ...state.items
            }
            const currentTotalPrice=copiedItems[action.payload].totalPrice;
            const currentTotalCount=copiedItems[action.payload].items.length;
            console.log('totalPrice:',state.totalPrice-currentTotalPrice);
            delete copiedItems[action.payload]
            setItemsToLocalStorage({items:copiedItems,
                totalCount:state.totalCount-currentTotalCount,
                totalPrice:state.totalPrice-currentTotalPrice}
            )
            return {...state,
                items:copiedItems,
                totalPrice: state.totalPrice-currentTotalPrice,
                totalCount:state.totalCount-currentTotalCount,
            }
        case MINUS_ITEM:{
            const oldItems=state.items[action.payload].items
            const newObjectItems= oldItems.length>1 ? [...state.items[action.payload].items].slice(1):oldItems;
            const newItems={
                ...state.items,
                    [action.payload]:{
                        items:newObjectItems,
                        totalPrice:getTotalPrice(newObjectItems),
                    },
                }
            const totalCount=totalSum(newItems,'items.length');
            const totalPrice=totalSum(newItems,'totalPrice');
            setItemsToLocalStorage({items:newItems,totalCount,totalPrice})
            return {
                ...state,
                items:newItems,
                totalCount,
                totalPrice
            };
        }
        case PLUS_ITEM:{
            const newObjItems=[
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ];
            const newItems={
                ...state.items,
                [action.payload]:{
                    items:newObjItems,
                    totalPrice:getTotalPrice(newObjItems),
                },
            }
            const totalPrice=totalSum(newItems,'totalPrice');
            const totalCount=totalSum(newItems,'items.length');
            setItemsToLocalStorage({items:newItems,totalCount,totalPrice})
            return  {...state,
                items: newItems,
                totalCount,
                totalPrice,
            }
        }
        case SET_TYPE_FROM_LOCALSTORAGE:
            const items=action.payload.items
        return  {
            ...state,
            items:items ? items:{},
            totalCount: action.payload.totalCount ? action.payload.totalCount:0 ,
            totalPrice: action.payload.totalPrice ? action.payload.totalPrice:0
        }
        default:
            return state
    }

}
export default cartReducer
