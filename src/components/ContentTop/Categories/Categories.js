import React from "react";
import classnames from 'classnames';
import PropTypes, {number} from 'prop-types';
const Categories=React.memo(({items,currentCategory, onSelectCategory})=>{
    const reactItems=items.map((item,index)=><li onClick={()=>onSelectCategory(index)}
                                                 className={classnames({
        'active':currentCategory==index
    })} key={`${item}_${index}`}>{item}</li>);
    return (
        <div className="categories">
            <ul>
                <li className={classnames({"active":currentCategory===null})}
                    onClick={()=>{
                        onSelectCategory(null);
                    }}>Все</li>
                {reactItems}
            </ul>
        </div>
    )
});
Categories.propTypes={
/*
    currentCategory:PropTypes.oneOf([PropTypes.number,null]),
*/
    items:PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelectCategory:PropTypes.func.isRequired,
}
Categories.defaultProps={
    currentCategory:null,
    items:[],
}
export default Categories