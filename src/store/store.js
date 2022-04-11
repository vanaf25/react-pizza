import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import pizzaReducer from "./reducers/pizza-reducer";
import  thunkMiddleWare from "redux-thunk";
import filterReducer from "./reducers/filter-reducer";
import cartReducer from "./reducers/cart-reducer";
let reducers=combineReducers({
dataPizza:pizzaReducer,
    filter:filterReducer,
    cart:cartReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store=createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));
export default store
