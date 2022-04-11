import React from "react";
const NotFound=()=>{
    return (
        <div className="content">
            <div className="container container_notFound">
                <h1>Страница не найдена</h1>
                <p className={"notFound_p"} >Извините, но страница не найдена. Возможно, вы ошиблись в адресной строке</p>
                <img src="https://cdn.iconscout.com/icon/free/png-256/page-not-found-5-530376.png" alt="not found"/>
            </div>
        </div>
    )
}
export default NotFound