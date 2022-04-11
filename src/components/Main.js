import React from "react";
import '../components/../scss/app.scss';
import ContentTop from "./ContentTop/ContentTop";
import ContentItems from "./ContentItems/ContentItems";
import { setCategory, setSortBy} from "../store/actions/filter";
import {useSelector} from "react-redux";
const Main=React.memo(()=>{
    const {items}=useSelector(({cart})=>{
        return {
            items:cart.items
        }
    });
    return (
        <div className="content">
            <div className="container">
                <ContentTop  setSortBy={setSortBy}  setCategory={setCategory}/>
                <h2 className="content__title">Все пиццы</h2>
                    <ContentItems cartItems={items} />
            </div>
        </div>
    )
});
export default Main;
